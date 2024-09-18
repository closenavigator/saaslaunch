"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

const Testimonials = () => (
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

const SignUpForm = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Submitted email:', email)
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="flex w-full max-w-sm mx-auto bg-zinc-800 rounded-lg p-1 shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Input
        type="email"
        placeholder="Sign up for free..."
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-grow bg-transparent border-none text-white placeholder-zinc-400 focus:ring-0 focus:outline-none"
      />
      <Button 
        type="submit" 
        className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-6 py-2 rounded-md transition-all duration-200 ease-in-out transform hover:scale-105"
      >
        Join Now
      </Button>
    </motion.form>
  )
}

export default function SearchHero() {
  return (
    <div className="text-zinc-800 min-h-[50vh] flex items-center justify-center p-4">
      <div className="w-full max-w-xl mx-auto space-y-6 text-center">
        <motion.h1 
          className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tighter"
          style={{ fontFamily: "'Impact', sans-serif" }}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        >
          FIND YOUR PERFECT<br />SALES CANDIDATE
        </motion.h1>
        <motion.p 
          className="text-base md:text-lg max-w-lg mx-auto text-zinc-700"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 100 }}
        >
          Discover top-tier sales talent tailored to your needs.
          Our AI-powered platform makes hiring easier and more effective.
        </motion.p>
        <SignUpForm />
        <Testimonials />
      </div>
    </div>
  )
}