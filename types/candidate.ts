import { LucideIcon } from 'lucide-react'

export interface Insight {
  icon: LucideIcon;
  title: string;
  value: string;
}

export interface Industry {
  name: string;
  icon: LucideIcon;
  color: string;
}

export interface Job {
  logo: string;
  period: string;
  role: string;
  company: string;
  industries: Industry[];
  description: string;
}

export interface CandidateData {
  name: string;
  currentRole: string;
  location: string;
  avatar: string;
  insights: Insight[];
  whyReasons: string[];
  jobs: Job[];
  jobMatch?: {
    matchPercentage: number;
    details: { category: string; percentage: number }[];
  };
}