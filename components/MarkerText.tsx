import React from 'react'
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const markerTextVariants = cva(
  "relative inline-block",
  {
    variants: {
      color: {
        yellow: "selection:bg-yellow-200",
        green: "selection:bg-green-200",
        blue: "selection:bg-blue-200",
      },
    },
    defaultVariants: {
      color: "yellow",
    },
  }
)

export interface MarkerTextProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof markerTextVariants> {
  children: React.ReactNode
}

const MarkerText = React.forwardRef<HTMLSpanElement, MarkerTextProps>(
  ({ className, color, children, ...props }, ref) => {
    return (
      <span
        className={cn(markerTextVariants({ color, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </span>
    )
  }
)
MarkerText.displayName = "MarkerText"

export { MarkerText, markerTextVariants }