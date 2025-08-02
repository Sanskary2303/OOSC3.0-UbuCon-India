"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <div className="relative bg-gradient-to-r from-[#1d3958] to-[#2a4c76] dark:from-[#0f1b2c] dark:to-[#1a2e4a] text-white overflow-hidden min-h-screen flex items-center">
      {/* Background particle effect */}
      <div className="absolute inset-0 bg-[url('/img/hero-section.png')] bg-cover opacity-20" />

      <div className="container mx-auto py-24 pt-32 md:pt-40 relative z-10 pl-45">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-6xl font-bold leading-tight mb-6"
            >
              OPPORTUNITY
              <br />
              <span className="text-[#5faed2] dark:text-[#7cc5e3]">OPEN-SOURCE CONFERENCE</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <p className="text-xl md:text-2xl mb-6">September 5-7, 2025</p>
              <p className="text-lg mb-8 max-w-md">
                Join us at IIT Kanpur for a gathering that brings together developers,
                enthusiasts, industry experts, and academics to explore the latest trends,
                tools, and projects in open source.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-[#5faed2] hover:bg-[#4a9dc1] dark:bg-[#7cc5e3] dark:hover:bg-[#5faed2] text-white">
                  <Link href="/register">
                    Keep Updated
                  </Link>
                </Button>
                <Button 
                  asChild 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white bg-white/20 hover:bg-white hover:text-[#1d3958] dark:border-white dark:text-white dark:bg-white/20 dark:hover:text-[#0f1b2c]"
                >
                  <Link href="/events">
                    Explore Events
                  </Link>
                </Button>
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-[#e95420] hover:bg-[#c7471b] text-white"
                >
                  <Link href="https://events.canonical.com/event/134/" target="_blank" rel="noopener noreferrer">
                    Indico Page
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
