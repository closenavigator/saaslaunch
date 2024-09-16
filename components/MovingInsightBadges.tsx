'use client'

import React from 'react'
import { Badge } from "@/components/ui/badge"

interface Insight {
  icon: React.ElementType;
  title: string;
  value: string;
}

const InsightBadge: React.FC<{ insight: Insight }> = ({ insight }) => {
  const IconComponent = insight.icon;

  return (
    <Badge 
      variant="outline" 
      className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800 border border-gray-200 cursor-pointer transition-all duration-300 ease-in-out hover:bg-gray-200 hover:border-gray-300 focus:outline-none focus:ring-0"
    >
      <IconComponent className="h-3 w-3 mr-1" />
      {insight.title}: {insight.value}
    </Badge>
  )
}

export const MovingInsightBadges: React.FC<{ insights: Insight[] }> = ({ insights }) => {
  return (
    <>
      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
      <div className="relative mb-6">
        <div className="absolute left-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-r from-background to-transparent z-[2]"></div>
        <div className="absolute right-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-l from-background to-transparent z-[2]"></div>
        <div className="overflow-hidden">
          <div className="flex animate-scroll hover:pause relative z-[1]">
            {[...insights, ...insights].map((insight, index) => (
              <div key={index} className="flex-shrink-0 mx-2">
                <InsightBadge insight={insight} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}