import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">About</h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto mb-6" />
        </div>

        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 dark:text-gray-200 mb-8 leading-relaxed">
            The Open Source Conference (OOSC 3.0), is a premier event dedicated to fostering innovation,
            collaboration, and learning in the open-source community. This gathering brings together
            developers, enthusiasts, industry experts, and academics to explore the latest trends,
            tools, and projects in open source.
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-200 mb-8 leading-relaxed">
            Be a part of the vibrant open-source community this year, at IIT Kanpur. Whether you are
            a developer, student, researcher, or enthusiast, the OOSC offers something for everyone.
            Join us to learn, innovate, and contribute to the open-source movement.
          </p>

          <div className="flex justify-center">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-[#1d3958] dark:text-[#5faed2]">
                OOSC 3.0
              </h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-200">In-depth technical talks and presentations</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-200">Hands-on workshops on cutting-edge technologies</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-200">Hackathon with exciting challenges and prizes</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-200">Networking opportunities with industry leaders</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-[#1d3958] hover:bg-[#152b44] dark:bg-[#2a4c76] dark:hover:bg-[#1d3958] text-white">
              <Link href="/events">
                Explore All Events
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
