"use client";

import React from "react";
import { cn } from "@/lib/utils";

export const MovingBorder = ({
  children,
  duration = 5000,
  className,
  ...props
}: {
  children: React.ReactNode;
  duration?: number;
  className?: string;
  [key: string]: any;
}) => {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl",
        className
      )}
      {...props}
    >
      <div className="absolute inset-[2px] rounded-[inherit] bg-background z-10">
        {children}
      </div>
      <div
        className="absolute inset-0 z-0 overflow-hidden rounded-[inherit]"
      >
        <div
          className="absolute inset-0 animate-spin"
          style={{
            animationDuration: `${duration}ms`,
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
          }}
        >
          <div
            className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0_340deg,yellow_360deg)]"
          />
        </div>
      </div>
    </div>
  );
};