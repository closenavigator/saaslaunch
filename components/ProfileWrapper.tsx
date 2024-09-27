'use client'

import React from 'react'
import { Database, Shield, BarChart3, Target, Code, Server, Users, Zap } from 'lucide-react'
import { TooltipProvider } from "@/components/ui/tooltip"
import Profile from '@/components/Profile'
import { CandidateData } from '@/types/candidate'
import { CardStack } from "@/components/ui/card-stack"

const ProfileWrapper: React.FC = () => {
  const profiles: CandidateData[] = [
    {
      id: 0,
      name: "Jane Doe",
      currentRole: "Senior Software Engineer",
      location: "San Francisco, USA",
      avatar: "https://i.pravatar.cc/300?img=1",
      isVerified: true,
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
    },
    {
      id: 1,
      name: "John Smith",
      currentRole: "Full Stack Developer",
      location: "New York, USA",
      avatar: "https://i.pravatar.cc/300?img=2",
      isVerified: true,
      insights: [
        { icon: Code, title: "Frontend", value: "Expert" },
        { icon: Server, title: "Backend", value: "Expert" },
        { icon: Database, title: "Database", value: "Advanced" },
        { icon: Shield, title: "Security", value: "Intermediate" },
        { icon: Users, title: "Team Leadership", value: "Advanced" },
        { icon: Zap, title: "Performance", value: "Expert" },
      ],
      whyReasons: [
        "Extensive experience in both frontend and backend development",
        "Strong problem-solving skills and attention to detail",
        "Passionate about creating scalable and efficient applications",
        "Active contributor to open-source projects",
      ],
      jobMatch: {
        matchPercentage: 90,
        details: [
          { category: "Skills", percentage: 95 },
          { category: "Experience", percentage: 85 },
          { category: "Education", percentage: 90 },
        ],
      },
      jobs: [
        {
          company: "Tech Innovators Inc.",
          role: "Senior Developer",
          period: "2018 - Present",
          logo: "/placeholder2.svg",
          industries: [
            { name: "Web", icon: Code, color: "purple" },
            { name: "Cloud", icon: Server, color: "blue" }
          ],
          description: "Led development of scalable web applications and microservices."
        }
      ],
    },
  ];

  const handleLike = (id: number) => {
    console.log("Liked profile:", id);
    // Add logic to move to the next profile
  };

  const handleSkip = (id: number) => {
    console.log("Skipped profile:", id);
    // Add logic to move to the next profile
  };

  const handleSchedule = (id: number) => {
    console.log("Scheduled interview with:", id);
    // Add logic to handle scheduling
  };

  const cards = profiles.map(profile => ({
    id: profile.id,
    content: (
      <div className="w-full bg-card border border-border rounded-lg shadow-lg overflow-hidden">
        <Profile 
          data={profile}
          onLike={() => handleLike(profile.id)}
          onSkip={() => handleSkip(profile.id)}
          onSchedule={() => handleSchedule(profile.id)}
          isBackgroundCard={false}
        />
      </div>
    ),
  }));

  return (
    <TooltipProvider>
      <div className="w-full max-w-2xl mx-auto mt-8">
        <CardStack items={cards} offset={20} scaleFactor={0.08} />
      </div>
    </TooltipProvider>
  );
}

export default ProfileWrapper;