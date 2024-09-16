import React from 'react';
import { cn } from "@/lib/utils";

interface HoverAnimationProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const HoverAnimation: React.FC<HoverAnimationProps> = ({ children, className, ...props }) => {
  return (
    <div
      className={cn(
        "relative overflow-hidden group",
        className
      )}
      {...props}
    >
      {children}
      <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  );
};

export default HoverAnimation;