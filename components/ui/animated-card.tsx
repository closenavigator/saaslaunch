import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const animatedCardVariants = cva(
  "transition-transform duration-300 ease-in-out",
  {
    variants: {
      hoverEffect: {
        lift: "hover:-translate-y-1",
        grow: "hover:scale-105",
        pulse: "hover:animate-pulse",
      },
    },
    defaultVariants: {
      hoverEffect: "lift",
    },
  }
)

export interface AnimatedCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof animatedCardVariants> {
  asChild?: boolean
}

const AnimatedCard = React.forwardRef<HTMLDivElement, AnimatedCardProps>(
  ({ className, hoverEffect, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "div"
    return (
      <Comp
        className={cn(animatedCardVariants({ hoverEffect, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
AnimatedCard.displayName = "AnimatedCard"

export { AnimatedCard, animatedCardVariants }