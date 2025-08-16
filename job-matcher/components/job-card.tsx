import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Building } from "lucide-react"
import { ScoreBadge } from "@/components/score-badge"

interface Job {
  id: number
  title: string
  company: string
  location: string
  score: number
  description: string
  requirements: string[]
}

interface JobCardProps {
  job: Job
}

export function JobCard({ job }: JobCardProps) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <CardTitle className="text-xl">{job.title}</CardTitle>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Building className="h-4 w-4" />
                {job.company}
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                {job.location}
              </div>
            </div>
          </div>
          <ScoreBadge score={job.score} />
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="mb-4">{job.description}</CardDescription>

        <div className="space-y-3">
          <div>
            <h4 className="font-medium mb-2">Required Skills:</h4>
            <div className="flex flex-wrap gap-2">
              {job.requirements.map((req, index) => (
                <Badge key={index} variant="secondary">
                  {req}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex gap-2 pt-2">
            <Button>Apply Now</Button>
            <Button variant="outline">View Details</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
