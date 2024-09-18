"use client"

import { motion } from 'framer-motion';
import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight, Github } from 'lucide-react';
import { useTheme } from 'next-themes';
import { GradientHeading } from "../ui/gradient-heading";

export default function HeroSection() {
    const { theme } = useTheme();

    return (
        <div className="text-zinc-800 dark:text-zinc-200 min-h-[50vh] flex items-center justify-center p-4">
            <div className="w-full max-w-xl mx-auto space-y-6 text-center">
                <GradientHeading>
                    NEXTJS STARTER KIT:<br />BUILD & SHIP FAST
                </GradientHeading>
                <motion.p 
                    className="text-base md:text-lg max-w-lg mx-auto text-zinc-700 dark:text-zinc-300"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 100 }}
                >
                    The Ultimate Nextjs 14 Starter Kit for quickly building your SaaS,
                    giving you time to focus on what really matters
                </motion.p>
                <div className="flex flex-wrap justify-center items-center gap-3 mt-8">
                    <Link href="/dashboard">
                        <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-6 py-2 rounded-md transition-all duration-200 ease-in-out transform hover:scale-105">
                            Get Started
                        </Button>
                    </Link>
                    <Link
                        href="https://discord.gg/HUcHdrrDgY"
                        target='_blank'
                        aria-label="Join Discord (opens in a new tab)"
                    >
                        <Button variant="outline" className="flex gap-1 bg-zinc-800 text-white hover:bg-zinc-700">
                            Join Discord
                            <ArrowRight className='w-4 h-4' aria-hidden="true" />
                        </Button>
                    </Link>
                    <Link
                        href="https://github.com/michaelshimeles/nextjs14-starter-template"
                        target='_blank'
                        aria-label="View NextJS 14 Starter Template on GitHub"
                    >
                        <Button variant="outline" className="p-2 rounded-full bg-zinc-800 text-white hover:bg-zinc-700">
                            <Github className='w-5 h-5' aria-hidden="true" />
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
