import { LucideIcon } from 'lucide-react'
import { ReactNode } from 'react'

export interface Insight {
  icon: LucideIcon;
  title: string;
  value: string;
}

export interface CandidateData {
  id: number;
  name: string;
  currentRole: string;
  location: string;
  avatar: string;
  isVerified: boolean;
  insights: Array<{ icon: React.ElementType; title: string; value: string }>;
  whyReasons: string[];
  jobMatch?: {
    matchPercentage: number;
    details: Array<{ category: string; percentage: number }>;
  };
  jobs: Array<{
    company: string;
    role: string;
    period: string;
    logo: string;
    industries: Array<{ name: string; icon: React.ElementType; color: string }>;
    description: string;
  }>;
}