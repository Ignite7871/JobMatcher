import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { UploadForm } from "@/components/upload-form"

export default function UploadResumePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-4">Upload Your Resume</h1>
            <p className="text-muted-foreground">
              Upload your resume in PDF or text format to get started with AI-powered job matching.
            </p>
          </div>

          <UploadForm />
        </div>
      </main>

      <Footer />
    </div>
  )
}
