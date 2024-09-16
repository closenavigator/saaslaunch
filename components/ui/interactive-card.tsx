import React from 'react'
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface InteractiveCardProps extends React.ComponentPropsWithoutRef<typeof Card> {
  children: React.ReactNode;
  depth?: number;
}

const InteractiveCard: React.FC<InteractiveCardProps> = ({ className, children, depth = 0, ...props }) => {
  const getDepthStyle = (depth: number) => {
    const baseColor = 'hsl(var(--card))';
    const darkenAmount = depth * 3; // Increase this value for more contrast
    return {
      backgroundColor: `color-mix(in srgb, ${baseColor}, black ${darkenAmount}%)`,
      transform: `translateY(${depth * 8}px) scale(${1 - depth * 0.015})`,
      zIndex: 5 - depth,
    };
  };

  return (
    <Card 
      className={cn(
        "hover:bg-accent transition-colors",
        className
      )}
      style={getDepthStyle(depth)}
      {...props}
    >
      {children}
    </Card>
  )
}

export default InteractiveCard