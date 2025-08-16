// API route for handling resume uploads
// This will be deployed as a Vercel serverless function

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS")
  res.setHeader("Access-Control-Allow-Headers", "Content-Type")

  if (req.method === "OPTIONS") {
    return res.status(200).end()
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" })
  }

  try {
    // TODO: Implement file upload handling (multipart/form-data)
    // TODO: Validate file type (PDF/TXT) and size limits
    // TODO: Store uploaded file in Vercel Blob or similar storage

    const { fileName, fileContent } = req.body

    if (!fileName || !fileContent) {
      return res.status(400).json({ error: "Missing file name or content" })
    }

    // TODO: Integrate resume parsing logic
    const parsedResume = await parseResume(fileContent, fileName)

    // TODO: Generate embeddings for the parsed resume
    const resumeEmbeddings = await generateEmbeddings(parsedResume)

    // TODO: Store resume data and embeddings in database
    const resumeId = await storeResumeData({
      fileName,
      parsedContent: parsedResume,
      embeddings: resumeEmbeddings,
      uploadedAt: new Date().toISOString(),
    })

    res.status(200).json({
      success: true,
      resumeId,
      message: "Resume uploaded and processed successfully",
      parsedData: parsedResume, // For development/testing
    })
  } catch (error) {
    console.error("Resume upload error:", error)
    res.status(500).json({
      error: "Failed to process resume",
      details: error.message,
    })
  }
}

// Import utility functions (these will contain the ML logic)
import { parseResume } from "./utils/resumeParser.js"
import { generateEmbeddings } from "./utils/embeddingGenerator.js"
import { storeResumeData } from "./utils/dataStorage.js"
import formidable from "formidable";
import fs from "fs";
import pdf from "pdf-parse";

export const config = { api: { bodyParser: false } };

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  const form = formidable({ multiples: false });
  form.parse(req, async (err, fields, files) => {
    if (err) return res.status(400).json({ error: "Invalid form data" });
    try {
      const rawText = fields.text?.toString();
      if (rawText && rawText.trim().length > 0) return res.status(200).json({ text: rawText.trim() });
      const f = files.file;
      if (!f) return res.status(400).json({ error: "No file or text provided" });
      const buf = fs.readFileSync(f.filepath);
      let text = "";
      if ((f.mimetype || "").includes("pdf") || f.originalFilename?.toLowerCase().endsWith(".pdf")) {
        const data = await pdf(buf);
        text = (data.text || "").trim();
      } else {
        text = buf.toString("utf8").trim();
      }
      if (!text) return res.status(400).json({ error: "Could not extract text" });
      return res.status(200).json({ text });
    } catch {
      return res.status(500).json({ error: "Parse error" });
    }
  });
}

