'use client'

import React from 'react'
import { X } from 'lucide-react'
import * as Dialog from '@radix-ui/react-dialog'
import { Card, CardContent } from "@/components/ui/card"

const VideoButton = ({ onClick }: { onClick: () => void }) => (
  <Card className="w-full">
    <CardContent className="p-3 flex items-center justify-between cursor-pointer" onClick={onClick}>
      <span className="font-medium text-sm">Objection handling</span>
      <LiveVideoIndicator />
    </CardContent>
  </Card>
)

const LiveVideoIndicator = () => (
  <div className="flex items-center space-x-1">
    <div className="relative">
      <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
      <div className="w-2 h-2 bg-red-500 rounded-full absolute top-0 left-0 animate-ping"></div>
    </div>
    <span className="text-xs font-medium text-muted-foreground">LIVE VIDEO</span>
  </div>
)

const VideoEmbed = ({ videoId }: { videoId: string }) => (
  <div className="relative pt-[56.25%]">
    <iframe
      className="absolute top-0 left-0 w-full h-full"
      src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
)

export default function VideoButtonWrapper() {
  const [isOpen, setIsOpen] = React.useState(false)
  const videoId = "gqUQbjsYZLQ"

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>
        <VideoButton onClick={() => setIsOpen(true)} />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
        <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl p-4">
          <div className="bg-card rounded-lg shadow-xl overflow-hidden">
            {isOpen && <VideoEmbed videoId={videoId} />}
            <Dialog.Close asChild>
              <button
                className="absolute top-4 right-4 bg-card-foreground/10 text-card-foreground rounded-full p-2 hover:bg-card-foreground/20 focus:outline-none focus:ring-2 focus:ring-card-foreground/20"
                aria-label="Close"
              >
                <X className="w-6 h-6" />
              </button>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}