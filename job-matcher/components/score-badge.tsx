import { Badge } from "@/components/ui/badge"

interface ScoreBadgeProps {
  score: number
}

export function ScoreBadge({ score }: ScoreBadgeProps) {
  const getScoreColor = (score: number) => {
    if (score >= 90) return "bg-green-500 hover:bg-green-600"
    if (score >= 75) return "bg-blue-500 hover:bg-blue-600"
    if (score >= 60) return "bg-yellow-500 hover:bg-yellow-600"
    return "bg-red-500 hover:bg-red-600"
  }

  const getScoreLabel = (score: number) => {
    if (score >= 90) return "Excellent Match"
    if (score >= 75) return "Good Match"
    if (score >= 60) return "Fair Match"
    return "Poor Match"
  }

  return (
    <div className="text-center">
      <Badge className={`${getScoreColor(score)} text-white font-bold px-3 py-1`}>{score}%</Badge>
      <p className="text-xs text-muted-foreground mt-1">{getScoreLabel(score)}</p>
    </div>
  )
}
