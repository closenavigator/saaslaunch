'use client'

import React from 'react'
import { Trophy } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const VerifiedBadge: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Badge 
          variant="outline" 
          className="ml-2 inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-200 text-amber-800 border border-amber-300 cursor-pointer transition-all duration-300 ease-in-out hover:from-amber-300 hover:via-yellow-400 hover:to-amber-300 hover:border-amber-400 focus:outline-none focus:ring-0 shadow-[0_0_10px_rgba(251,191,36,0.5)] hover:shadow-[0_0_15px_rgba(251,191,36,0.7)]"
        >
          <Trophy className="h-3 w-3 mr-1" />
          Verified
        </Badge>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center text-amber-800">
            <Trophy className="h-5 w-5 mr-2" />
            Verified Profile
          </DialogTitle>
        </DialogHeader>
        <div className="bg-gradient-to-br from-amber-50 to-amber-100 text-amber-800 border border-amber-200 p-4 rounded-lg">
          <p className="text-sm mb-3">This candidate has completed our advanced training program.</p>
          <h5 className="font-medium mb-2">Program Details:</h5>
          <ul className="text-sm list-disc list-inside space-y-1">
            <li>200+ hours of intensive training</li>
            <li>Practical projects reviewed by industry experts</li>
            <li>Certification exam with 95% pass mark</li>
          </ul>
          <p className="text-sm mt-3 font-medium">Verified by: TechCert Inc.</p>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default VerifiedBadge