import React from 'react'
import { InfoIcon } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface ScoreBadgeProps {
  score: number;
  details: Array<{ category: string; percentage: number }>;
}

const ScoreBadge: React.FC<ScoreBadgeProps> = ({ score, details }) => {
  const getColor = (percentage: number) => {
    if (percentage >= 80) return 'bg-green-500'
    if (percentage >= 60) return 'bg-yellow-500'
    return 'bg-red-500'
  }

  return (
    <Card>
      <CardContent className="p-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="font-medium text-sm">Job Match</span>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <InfoIcon className="h-4 w-4 text-muted-foreground" />
              </TooltipTrigger>
              <TooltipContent side="bottom" align="start" className="w-64">
                <p className="text-sm">Job match is calculated based on your skills, experience, and education compared to the job requirements.</p>
                <div className="mt-2 space-y-1">
                  {details.map((detail, index) => (
                    <div key={index} className="flex justify-between text-sm">
                      <span>{detail.category}</span>
                      <span className="font-medium">{detail.percentage}%</span>
                    </div>
                  ))}
                </div>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <Badge className={`text-white ${getColor(score)}`}>
          {score}%
        </Badge>
      </CardContent>
    </Card>
  )
}

export default ScoreBadge