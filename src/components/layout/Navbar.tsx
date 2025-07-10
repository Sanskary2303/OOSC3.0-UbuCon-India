"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme/ThemeToggle"

const navItems = [
  { name: "Home", path: "/" },
  { name: "Events", path: "/events" },
  { name: "Hackathon", path: "/hackathon" },
  { name: "Speakers", path: "/speakers" },
  { name: "Sponsors", path: "/sponsors" },
  { name: "Calendar", path: "/calendar" },
  { name: "Team", path: "/team" },
  { name: "Merchandise", path: "/merchandise" },
  { name: "CA Portal", path: "/ca"},
  { name: "Register", path: "/register" },
  { name: "Contact", path: "/contact" },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Determine if we're on a page with a dark hero (like home)
  const isDarkHeroPage = pathname === "/"

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-white shadow-md dark:bg-gray-900 dark:shadow-gray-800" 
        : isDarkHeroPage 
          ? "bg-transparent dark:bg-transparent" 
          : "bg-gray-100 dark:bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/img/logos/oosc-logo.png"
                alt="OOSC Logo"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
          </div>
          <div className="hidden md:flex items-center">
            <div className="ml-10 flex items-center space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                    pathname === item.path
                      ? "text-primary"
                      : isScrolled || !isDarkHeroPage
                        ? "text-gray-700 hover:text-primary dark:text-gray-200 dark:hover:text-primary"
                        : "text-white hover:text-blue-200 dark:text-gray-200 dark:hover:text-primary"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="ml-4">
              <ThemeToggle />
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              className={`ml-2 ${
                isScrolled || !isDarkHeroPage
                  ? "text-gray-700 dark:text-gray-200" 
                  : "text-white dark:text-gray-200"
              }`}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  pathname === item.path
                    ? "text-primary bg-blue-50 dark:bg-blue-900/30"
                    : "text-gray-700 hover:text-primary hover:bg-blue-50 dark:text-gray-200 dark:hover:bg-blue-900/20"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
