'use client'

import React, { useState } from 'react'
import { Database, Shield, BarChart3, Target, Code, Server, Users, Zap } from 'lucide-react'
import { TooltipProvider } from "@/components/ui/tooltip"
import Profile from '@/components/Profile'
import { CandidateData } from '@/types/candidate'
import InteractiveCard from "@/components/ui/interactive-card"

const ProfileWrapper: React.FC = () => {
  const [currentProfile, setCurrentProfile] = useState<CandidateData>({
    name: "Jane Doe",
    currentRole: "Senior Software Engineer",
    location: "San Francisco, USA",
    avatar: "/placeholder.svg?height=128&width=128",
    isVerified: true, // Add this line
    insights: [
      { icon: Database, title: "Database", value: "Expert" },
      { icon: Shield, title: "Security", value: "Advanced" },
      { icon: BarChart3, title: "Analytics", value: "Intermediate" },
      { icon: Target, title: "Agile", value: "Expert" },
      { icon: Code, title: "Frontend", value: "Expert" },
      { icon: Server, title: "Backend", value: "Advanced" },
      { icon: Users, title: "Team Leadership", value: "Intermediate" },
      { icon: Zap, title: "Performance Optimization", value: "Advanced" },
    ],
    whyReasons: [
      "Strong technical skills in full-stack development",
      "Proven track record of leading successful projects",
      "Excellent communication and teamwork abilities",
      "Passionate about mentoring junior developers",
    ],
    jobMatch: {
      matchPercentage: 85,
      details: [
        { category: "Skills", percentage: 90 },
        { category: "Experience", percentage: 80 },
        { category: "Education", percentage: 85 },
      ],
    },
    jobs: [
      {
        company: "Example Company",
        role: "Software Engineer",
        period: "2020 - Present",
        logo: "/placeholder.svg",
        industries: [
          { name: "Tech", icon: Code, color: "blue" },
          { name: "AI", icon: Database, color: "green" }
        ],
        description: "Worked on various projects using cutting-edge technologies."
      }
    ],
  });

  const handleLike = () => {
    console.log("Liked profile:", currentProfile.name);
    // Add logic to move to the next profile
  };

  const handleSkip = () => {
    console.log("Skipped profile:", currentProfile.name);
    // Add logic to move to the next profile
  };

  const handleSchedule = () => {
    console.log("Scheduled interview with:", currentProfile.name);
    // Add logic to handle scheduling
  };

  return (
    <TooltipProvider>
      <div className="relative w-full max-w-2xl mx-auto mb-20" style={{ height: 'calc(100vh - 100px)' }}>
        {[...Array(5)].map((_, index) => (
          <InteractiveCard
            key={index}
            depth={index}
            className="absolute top-0 left-0 w-full"
          >
            <Profile 
              data={currentProfile}
              onLike={index === 0 ? handleLike : () => {}}
              onSkip={index === 0 ? handleSkip : () => {}}
              onSchedule={index === 0 ? handleSchedule : () => {}}
              isBackgroundCard={index !== 0}
            />
          </InteractiveCard>
        ))}
      </div>
    </TooltipProvider>
  );
}

export default ProfileWrapper;