import { BlocksIcon } from "lucide-react";
import Link from 'next/link';

interface BuildSalesTeamsLogoProps {
  className?: string;
}

export default function BuildSalesTeamsLogo({ className = "" }: BuildSalesTeamsLogoProps) {
  return (
    <Link href="/" className={`inline-flex items-center ${className}`} aria-label="Home">
      <div className="flex items-center justify-center space-x-2">
        <BlocksIcon className="h-6 w-6 flex-shrink-0" aria-hidden="true" />
        <span className="hidden md:inline text-lg font-semibold whitespace-nowrap">BuildSalesTeams</span>
      </div>
      <span className="sr-only">Home</span>
    </Link>
  );
}