"use client"

import { motion } from 'framer-motion'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

export const Testimonials = () => (
  <div className="flex items-center justify-center">
    <div className="flex items-start space-x-2">
      <div className="flex -space-x-2 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: i * 0.1 }}
          >
            <Avatar className="inline-block w-10 h-10 border border-zinc-700 bg-zinc-800">
              <AvatarImage src={`https://i.pravatar.cc/100?img=${i + 1}`} />
              <AvatarFallback>{`U${i + 1}`}</AvatarFallback>
            </Avatar>
          </motion.div>
        ))}
      </div>
      <div className="flex flex-col items-start space-y-1">
        <motion.div
          className="flex items-center space-x-0.5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-3 h-3 fill-zinc-600 text-zinc-600" />
          ))}
        </motion.div>
        <motion.div
          className="text-xs text-zinc-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          4.8 out of 5,851 reviews
        </motion.div>
      </div>
    </div>
  </div>
)