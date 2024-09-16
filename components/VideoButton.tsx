'use client'

import React from 'react'
import { Play } from 'lucide-react'
import { CardContent } from "@/components/ui/card"
import InteractiveCard from "@/components/ui/interactive-card"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { MarkerText } from '@/components/MarkerText'

const VideoButton: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const videoId = "gqUQbjsYZLQ" // Example YouTube video ID

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <InteractiveCard>
          <CardContent className="p-3 flex items-center justify-between cursor-pointer">
            <div className="flex items-center space-x-2">
              <Play className="h-4 w-4 text-muted-foreground" />
              <MarkerText>
                <span className="font-medium text-sm">Objection handling</span>
              </MarkerText>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <MarkerText>
                <span className="text-xs font-medium text-muted-foreground">LIVE VIDEO</span>
              </MarkerText>
            </div>
          </CardContent>
        </InteractiveCard>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px] p-0">
        <DialogHeader>
          <DialogTitle className="p-4">
            <MarkerText>Objection Handling Video</MarkerText>
          </DialogTitle>
        </DialogHeader>
        <div className="aspect-video">
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default VideoButton