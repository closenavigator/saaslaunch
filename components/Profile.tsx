'use client'

import React from 'react'
import { Share2, ThumbsUp, ThumbsDown, InfoIcon, MapPin, Calendar } from 'lucide-react'
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
import VideoButton from '@/components/VideoButton'
import { MovingInsightBadges } from '@/components/moving-insight-badges'
import InteractiveCard from "@/components/ui/interactive-card"
import { WorkHistory } from '@/components/WorkHistory'
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
    <InteractiveCard>
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
    </InteractiveCard>
  )
}

const CheckIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-green-500 mt-1 flex-shrink-0">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z" fill="currentColor" strokeWidth="0" />
    </svg>
  );
};

interface ProfileProps {
  data: CandidateData;
  onLike: () => void;
  onSkip: () => void;
  onSchedule: () => void;
  isBackgroundCard?: boolean;
}

const Profile: React.FC<ProfileProps> = ({ data, onLike, onSkip, onSchedule, isBackgroundCard = false }) => {
  return (
    <div className={`w-full max-w-2xl mx-auto overflow-hidden ${isBackgroundCard ? 'opacity-60' : 'shadow-[0_20px_70px_-15px_rgba(0,0,0,0.3)] transition-shadow duration-300 ease-in-out hover:shadow-[0_30px_100px_-20px_rgba(0,0,0,0.4)]'}`}>
      <CardContent className="p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6">
          <ProfileTitle
            name={data.name}
            currentRole={data.currentRole}
            location={data.location}
            avatar={data.avatar}
            isVerified={data.isVerified}
          />
          <div className="flex flex-col space-y-2 mt-4 sm:mt-0">
            <div className="flex space-x-2">
              <Button 
                size="sm" 
                variant="outline" 
                onClick={onSkip} 
                className="cursor-pointer shadow-[0_4px_14px_0_rgba(0,0,0,0.1)] hover:shadow-[0_6px_20px_0_rgba(0,0,0,0.15)] transition-shadow duration-200 ease-in-out"
              >
                <ThumbsDown className="h-4 w-4 mr-2" />
                Skip
              </Button>
              <Button 
                size="sm" 
                onClick={onLike} 
                className="cursor-pointer shadow-[0_4px_14px_0_rgba(0,0,0,0.1)] hover:shadow-[0_6px_20px_0_rgba(0,0,0,0.15)] transition-shadow duration-200 ease-in-out"
              >
                <ThumbsUp className="h-4 w-4 mr-2" />
                Like
              </Button>
            </div>
            <Button 
              size="sm" 
              onClick={onSchedule} 
              className="cursor-pointer bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-200 text-amber-800 border border-amber-300 hover:from-amber-300 hover:via-yellow-400 hover:to-amber-300 hover:border-amber-400 shadow-[0_4px_14px_0_rgba(251,191,36,0.5)] hover:shadow-[0_6px_20px_0_rgba(251,191,36,0.7)] transition-all duration-200 ease-in-out"
            >
              <Calendar className="h-4 w-4 mr-2" />
              Schedule
            </Button>
          </div>
        </div>
        
        <Separator className="my-6" />
        
        <MovingInsightBadges insights={data.insights} />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 mt-6">
          {data.jobMatch && (
            <ScoreBadge 
              score={data.jobMatch.matchPercentage}
              details={data.jobMatch.details}
            />
          )}
          <VideoButton />
        </div>
        
        <section>
          <h3 className="text-lg font-semibold mb-2">Why This Candidate?</h3>
          <ul className="space-y-2">
            {data.whyReasons.map((reason, index) => (
              <li key={index} className="flex items-start">
                <CheckIcon />
                <p className="text-sm ml-2">{reason}</p>
              </li>
            ))}
          </ul>
        </section>
        
        <Separator className="my-6" />
        
        <WorkHistory jobs={data.jobs} />
      </CardContent>
      <CardFooter className="px-6 py-4">
        <Button 
          variant="outline" 
          size="sm" 
          disabled={isBackgroundCard} 
          className="cursor-pointer shadow-[0_4px_14px_0_rgba(0,0,0,0.1)] hover:shadow-[0_6px_20px_0_rgba(0,0,0,0.15)] transition-shadow duration-200 ease-in-out"
        >
          <Share2 className="h-4 w-4 mr-2" />
          Share
        </Button>
      </CardFooter>
    </div>
  )
}

export default Profile