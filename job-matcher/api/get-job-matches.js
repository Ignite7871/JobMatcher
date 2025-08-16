// API route for getting job matches based on uploaded resume
// This will be deployed as a Vercel serverless function

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
  res.setHeader("Access-Control-Allow-Headers", "Content-Type")

  if (req.method === "OPTIONS") {
    return res.status(200).end()
  }

  if (req.method !== "GET" && req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" })
  }

  try {
    const { resumeId, limit = 10 } = req.method === "GET" ? req.query : req.body

    if (!resumeId) {
      return res.status(400).json({ error: "Resume ID is required" })
    }

    // TODO: Retrieve resume data and embeddings from database
    const resumeData = await getResumeData(resumeId)

    if (!resumeData) {
      return res.status(404).json({ error: "Resume not found" })
    }

    // TODO: Perform vector search against job database
    const jobMatches = await performVectorSearch(resumeData.embeddings, {
      limit: Number.parseInt(limit),
      threshold: 0.7, // Minimum similarity threshold
    })

    // TODO: Calculate detailed compatibility scores
    const rankedMatches = await calculateCompatibilityScores(resumeData.parsedContent, jobMatches)

    // TODO: Add explanation generation for each match
    const matchesWithExplanations = await generateMatchExplanations(resumeData.parsedContent, rankedMatches)

    res.status(200).json({
      success: true,
      resumeId,
      totalMatches: matchesWithExplanations.length,
      matches: matchesWithExplanations,
      processedAt: new Date().toISOString(),
    })
  } catch (error) {
    console.error("Job matching error:", error)
    res.status(500).json({
      error: "Failed to get job matches",
      details: error.message,
    })
  }
}

// Import utility functions
import { getResumeData } from "./utils/dataStorage.js"
import { performVectorSearch } from "./utils/vectorSearch.js"
import { calculateCompatibilityScores, generateMatchExplanations } from "./utils/matchingEngine.js"
import { embed } from "./utils/embeddingGenerator.js";
import { loadJobs } from "./utils/jobStore.js";
import { buildIndex, search } from "./utils/vectorStore.js";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  try {
    const { resumeText, topK = 10 } = req.body || {};
    if (!resumeText || typeof resumeText !== "string") return res.status(400).json({ error: "resumeText required" });
    const jobs = await loadJobs();
    if (!jobs.length) return res.status(200).json({ results: [] });
    const jobEmbeds = await Promise.all(jobs.map(j => embed(j.description)));
    const idx = buildIndex(jobEmbeds);
    const q = await embed(resumeText);
    const hits = search(idx, q, topK).map(({ i, score }) => ({
      id: jobs[i].id,
      title: jobs[i].title,
      company: jobs[i].company,
      location: jobs[i].location,
      score: Number(score.toFixed(4)),
      descriptionSnippet: jobs[i].description.slice(0, 280)
    }));
    return res.status(200).json({ results: hits });
  } catch {
    return res.status(500).json({ error: "Match error" });
  }
}

