import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { Button } from "@/components/ui/button"

interface ExpandableSectionProps {
  title: string;
  children: React.ReactNode;
}

export const ExpandableSection: React.FC<ExpandableSectionProps> = ({ title, children }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 transition-all duration-300 ease-in-out hover:bg-white hover:shadow-md">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <div className={`space-y-2 ${expanded ? '' : 'max-h-24 overflow-hidden relative'}`}>
        {children}
        {!expanded && (
          <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-gray-50 to-transparent"></div>
        )}
      </div>
      <div className="mt-2 flex justify-center">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setExpanded(!expanded)}
          className="p-2 h-auto font-normal text-blue-600 hover:text-blue-800 transition-all duration-300 ease-in-out"
        >
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
        </Button>
      </div>
    </div>
  )
}