import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#1d3958] dark:bg-[#0f1b2c] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4">
              <Link href="/" className="flex items-center">
                <Image
                  src="/img/logos/oosc-logo.png"
                  alt="OOSC Logo"
                  width={150}
                  height={50}
                  className="h-12 w-auto"
                />
              </Link>
            </div>
            <p className="text-gray-300 mb-4">
              Opportunity Open-Source Conference (OOSC) 3.0 & UbuCon India is a premier event dedicated to fostering innovation, collaboration, and learning in the open-source community.
            </p>
            {/* <div className="flex space-x-4">
              <Link href="#" className="text-gray-300 hover:text-white">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                <Linkedin size={20} />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                <Github size={20} />
              </Link>
            </div> */}
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white">Home</Link>
              </li>
              <li>
                <Link href="/events" className="text-gray-300 hover:text-white">Events</Link>
              </li>
              <li>
                <Link href="/speakers" className="text-gray-300 hover:text-white">Speakers</Link>
              </li>
              <li>
                <Link href="/register" className="text-gray-300 hover:text-white">Register</Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="mr-2">📍</span>
                <span>IIT Kanpur, Uttar Pradesh, India</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">📧</span>
                <a href="mailto:oosc2025.team@gmail.com" className="text-gray-300 hover:text-white">oosc2025.team@gmail.com</a>
              </li>
              {/* <li className="flex items-start">
                <span className="mr-2">📱</span>
                <a href="tel:+91 " className="text-gray-300 hover:text-white">+91 </a>
              </li> */}
            </ul>
          </div>
        </div>

        {/* <div className="border-t border-gray-700 mt-8 pt-8 text-center md:flex md:justify-between md:text-left">
          <p className="text-gray-300">
            &copy; {currentYear} OOSC 3.0 & UbuCon India. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <Link href="/privacy-policy" className="text-gray-300 hover:text-white mr-4">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-gray-300 hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div> */}
      </div>
    </footer>
  )
}
