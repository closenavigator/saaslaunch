import React from 'react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Badge } from "@/components/ui/badge"
import { Star } from 'lucide-react'

export const InsightBadge: React.FC = () => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Badge 
            variant="outline" 
            className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800 border border-gray-200 cursor-pointer transition-all duration-300 ease-in-out hover:bg-gray-200 hover:border-gray-300"
          >
            <Star className="h-3 w-3 mr-1" />
            Rating: 4.8/5
          </Badge>
        </TooltipTrigger>
        <TooltipContent 
          side="top" 
          sideOffset={5}
          className="bg-white p-2 rounded-md shadow-md border border-gray-200 text-sm"
        >
          <p>Based on 15 client reviews and 8 peer evaluations.</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export default InsightBadge