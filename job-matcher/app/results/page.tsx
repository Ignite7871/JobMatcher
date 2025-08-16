import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { JobCard } from "@/components/job-card"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

// Mock data for demonstration
const mockJobMatches = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    score: 95,
    description: "Looking for an experienced React developer with TypeScript expertise...",
    requirements: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
  },
  {
    id: 2,
    title: "Full Stack Engineer",
    company: "StartupXYZ",
    location: "Remote",
    score: 87,
    description: "Join our growing team as a full-stack engineer working with modern technologies...",
    requirements: ["Node.js", "React", "PostgreSQL", "AWS"],
  },
  {
    id: 3,
    title: "UI/UX Developer",
    company: "Design Studio",
    location: "New York, NY",
    score: 78,
    description: "Creative developer role combining design and development skills...",
    requirements: ["React", "CSS", "Figma", "JavaScript"],
  },
]

export default function JobResultsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-4 mb-8">
            <Link href="/upload">
              <Button variant="outline" size="sm">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Upload
              </Button>
            </Link>
            <div>
              <h1 className="text-3xl font-bold">Job Matches</h1>
              <p className="text-muted-foreground">
                Found {mockJobMatches.length} matching positions based on your resume
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {mockJobMatches.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
