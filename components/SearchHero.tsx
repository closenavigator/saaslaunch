'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Testimonials } from "@/components/Testimonials"
import { useTheme } from 'next-themes'
import { GradientHeading } from "./ui/gradient-heading";
import { Highlight } from "@/components/ui/highlight";

const SignUpForm = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Submitted email:', email)
    // Here you would typically handle the form submission
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
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // or a loading placeholder
  }

  return (
    <div className="text-zinc-800 dark:text-zinc-200 min-h-[50vh] flex items-center justify-center p-4">
      <div className="w-full max-w-xl mx-auto space-y-6 text-center">
        <GradientHeading>
          FIND YOUR PERFECT<br />SALES CANDIDATE
        </GradientHeading>
        <motion.p 
          className="text-base md:text-lg max-w-lg mx-auto text-zinc-700 dark:text-zinc-300"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 100 }}
        >
          Discover <Highlight>top-tier sales talent</Highlight> tailored to your needs.
          Our AI-powered platform makes hiring easier and more effective.
        </motion.p>
        <SignUpForm />
        <Testimonials />
      </div>
    </div>
  )
}