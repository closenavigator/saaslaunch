import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { InsightBadge } from '@/components/InsightBadge'

interface Industry {
  name: string;
  icon: React.ElementType;
  color: string;
}

interface Job {
  company: string;
  role: string;
  period: string;
  logo: string;
  industries: Industry[];
  description: string;
}

const GradientButton: React.FC<{ expanded: boolean; onClick: () => void; children: React.ReactNode }> = ({ expanded, onClick, children }) => {
  return (
    <Button
      variant="ghost"
      size="sm"
      className={`p-2 h-auto font-normal text-blue-600 hover:text-blue-800 transition-all duration-300 ease-in-out
                  bg-gradient-to-r from-blue-500 to-purple-500 bg-[length:200%_100%] bg-clip-text text-transparent
                  hover:bg-[length:100%_100%] ${expanded ? 'bg-left' : 'bg-right'}`}
      onClick={onClick}
    >
      {children}
    </Button>
  )
}

const JobCard: React.FC<{ job: Job }> = ({ job }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-2">
          <Avatar className="w-8 h-8">
            <AvatarImage src={job.logo} alt={`${job.company} logo`} />
            <AvatarFallback>{job.company[0]}</AvatarFallback>
          </Avatar>
          <Badge variant="secondary" className="text-xs">{job.period}</Badge>
        </div>
        <h4 className="font-semibold">{job.role}</h4>
        <p className="text-sm text-gray-600">{job.company}</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {job.industries.map((industry, i) => (
            <InsightBadge
              key={i}
              insight={{
                icon: industry.icon,
                title: industry.name,
                value: "",
              }}
            />
          ))}
        </div>
        <div className={`mt-2 text-sm relative ${expanded ? '' : 'max-h-12 overflow-hidden'}`}>
          <p>{job.description}</p>
          {!expanded && (
            <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-background to-transparent"></div>
          )}
        </div>
        <GradientButton expanded={expanded} onClick={() => setExpanded(!expanded)}>
          {expanded ? (
            <>
              <ChevronUp className="h-4 w-4 mr-1" />
              View less
            </>
          ) : (
            <>
              <ChevronDown className="h-4 w-4 mr-1" />
              View more
            </>
          )}
        </GradientButton>
      </CardContent>
    </Card>
  )
}

export const WorkHistory: React.FC<{ jobs: Job[] }> = ({ jobs }) => {
  return (
    <section>
      <h3 className="text-lg font-semibold mb-4">Work history</h3>
      <div className="space-y-4">
        {jobs.map((job, index) => (
          <JobCard key={index} job={job} />
        ))}
      </div>
    </section>
  )
}