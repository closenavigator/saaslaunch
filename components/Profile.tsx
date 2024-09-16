'use client'

import React from 'react'
import { Share2, ThumbsUp, ThumbsDown, InfoIcon } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import ProfileTitle from '@/components/ProfileTitle'
import VideoButtonWrapper from '@/components/VideoButton'
import InsightBadge from '@/components/InsightBadge'

import { CandidateData } from '@/types/candidate'

interface ScoreBadgeProps {
  score: number;
  details: { category: string; percentage: number }[];
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
        </div>
        <Badge className={`text-white ${getColor(score)}`}>
          {score}%
        </Badge>
      </CardContent>
    </Card>
  )
}

interface ProfileProps {
  data: CandidateData;
  onLike: () => void;
  onSkip: () => void;
}

const Profile: React.FC<ProfileProps> = ({ data, onLike, onSkip }) => {
  return (
    <Card className="w-full max-w-2xl mx-auto shadow-lg">
      <CardContent className="p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6">
          <ProfileTitle
            name={data.name}
            currentRole={data.currentRole}
            location={data.location}
            avatar={data.avatar}
          />
          <div className="flex space-x-2 mt-4 sm:mt-0">
            <Button size="sm" variant="outline" onClick={onSkip}>
              <ThumbsDown className="h-4 w-4 mr-2" />
              Skip
            </Button>
            <Button size="sm" onClick={onLike}>
              <ThumbsUp className="h-4 w-4 mr-2" />
              Like
            </Button>
          </div>
        </div>
        
        <Separator className="my-6" />
        
        <div className="flex flex-wrap gap-2 mb-6">
          <InsightBadge />
          {/* Add more insight badges here if needed */}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {data.jobMatch && (
            <ScoreBadge 
              score={data.jobMatch.matchPercentage}
              details={data.jobMatch.details}
            />
          )}
          <VideoButtonWrapper />
        </div>
        
        <div className="space-y-6">
          <section>
            <h3 className="text-lg font-semibold mb-2">Why This Candidate?</h3>
            <ul className="list-disc pl-5 space-y-1">
              {data.whyReasons.map((reason, index) => (
                <li key={index} className="text-sm">{reason}</li>
              ))}
            </ul>
          </section>
          
          <section>
            <h3 className="text-lg font-semibold mb-2">Work History</h3>
            <div className="space-y-4">
              {data.jobs.map((job, index) => (
                <div key={index} className="border-b pb-4 last:border-b-0">
                  <div className="flex items-center mb-2">
                    <img src={job.logo} alt={job.company} className="w-8 h-8 mr-3" />
                    <div>
                      <h4 className="font-semibold text-sm">{job.role}</h4>
                      <p className="text-xs text-muted-foreground">{job.company} • {job.period}</p>
                    </div>
                  </div>
                  <p className="text-sm mb-2">{job.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {job.industries.map((industry, idx) => (
                      <Badge key={idx} variant="secondary" className={`bg-${industry.color}-100 text-${industry.color}-800 text-xs`}>
                        <industry.icon className="w-3 h-3 mr-1" />
                        {industry.name}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </CardContent>
      <CardFooter className="bg-muted px-6 py-4">
        <Button variant="ghost" size="sm">
          <Share2 className="h-4 w-4 mr-2" />
          Share
        </Button>
      </CardFooter>
    </Card>
  )
}

export default Profile;