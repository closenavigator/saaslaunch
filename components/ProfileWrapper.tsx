'use client'

import React, { useState } from 'react'
import { Database, Shield, BarChart3, Target } from 'lucide-react'
import { TooltipProvider } from "@/components/ui/tooltip"
import Profile from '@/components/Profile'
import { CandidateData } from '@/types/candidate'

const ProfileWrapper: React.FC = () => {
  const [currentProfile, setCurrentProfile] = useState<CandidateData>({
    name: "Jane Doe",
    currentRole: "Senior Software Engineer",
    location: "San Francisco, USA",
    avatar: "/placeholder.svg?height=128&width=128",
    insights: [
      { icon: Database, title: "Database", value: "Expert" },
      { icon: Shield, title: "Security", value: "Advanced" },
      { icon: BarChart3, title: "Analytics", value: "Intermediate" },
      { icon: Target, title: "Agile", value: "Expert" },
    ],
    whyReasons: [
      "Strong technical skills in full-stack development",
      "Proven track record of leading successful projects",
      "Excellent communication and teamwork abilities",
      "Passionate about mentoring junior developers",
    ],
    jobs: [
      {
        logo: "/placeholder.svg?height=32&width=32",
        period: "2019 - Present",
        role: "Senior Software Engineer",
        company: "Tech Innovators Inc.",
        industries: [
          { name: "AI", icon: Database, color: "blue" },
          { name: "Cloud", icon: Shield, color: "green" },
        ],
        description: "Led the development of a cloud-based AI platform, improving data processing efficiency by 40%. Mentored junior developers and implemented best practices in code reviews and testing.",
      },
      {
        logo: "/placeholder.svg?height=32&width=32",
        period: "2016 - 2019",
        role: "Software Engineer",
        company: "DataDrive Solutions",
        industries: [
          { name: "Big Data", icon: BarChart3, color: "purple" },
          { name: "Analytics", icon: Target, color: "red" },
        ],
        description: "Developed and maintained data analytics tools for Fortune 500 clients. Optimized database queries, resulting in a 30% reduction in processing time for large datasets.",
      },
    ],
    jobMatch: {
      matchPercentage: 85,
      details: [
        { category: "Skills", percentage: 90 },
        { category: "Experience", percentage: 80 },
        { category: "Education", percentage: 85 },
      ],
    },
  });

  const handleLike = () => {
    console.log("Liked profile:", currentProfile.name);
    // Add logic to move to the next profile
  };

  const handleSkip = () => {
    console.log("Skipped profile:", currentProfile.name);
    // Add logic to move to the next profile
  };

  return (
    <div className="w-full max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-8">
        <TooltipProvider>
          <Profile 
            data={currentProfile}
            onLike={handleLike}
            onSkip={handleSkip}
          />
        </TooltipProvider>
      </div>
    </div>
  );
}

export default ProfileWrapper;