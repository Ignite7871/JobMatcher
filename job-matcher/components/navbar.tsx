import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl">
          ResumeMatch AI
        </Link>

        <div className="flex items-center gap-4">
          <Link href="/">
            <Button variant="ghost">Home</Button>
          </Link>
          <Link href="/upload">
            <Button variant="ghost">Upload Resume</Button>
          </Link>
          <Link href="/results">
            <Button variant="ghost">Results</Button>
          </Link>
        </div>
      </div>
    </nav>
  )
}
