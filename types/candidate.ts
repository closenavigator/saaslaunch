import { LucideIcon } from 'lucide-react'
import { ReactNode } from 'react'

export interface Insight {
  icon: LucideIcon;
  title: string;
  value: string;
}

export interface CandidateData {
  name: string;
  currentRole: string;
  location: string;
  avatar: string;
  insights: Insight[];
  whyReasons: string[];
  jobMatch?: {
    matchPercentage: number;
    details: { category: string; percentage: number }[];
  };
  jobs: {
    company: string;
    role: string;
    period: string;
    logo: string;
    industries: {
      name: string;
      icon: React.ElementType;
      color: string;
    }[];
    description: string;
  }[];
  isVerified: boolean; // Add this line
}