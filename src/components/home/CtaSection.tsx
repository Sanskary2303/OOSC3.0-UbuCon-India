import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CtaSection() {
  return (
    <section className="py-16 md:py-24 bg-[#1d3958] text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Us at OOSC 3.0
          </h2>
          <p className="text-lg mb-8 text-gray-200">
            Don't miss this unique opportunity to connect with the open-source community,
            learn from industry experts, and contribute to the future of open source.
            Register today to secure your spot at this premier event!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-[#5faed2] hover:bg-[#4a9dc1] text-white">
              <Link href="/register">
                Keep Updated
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white bg-white/20 hover:bg-white hover:text-[#1d3958]">
              <Link href="/contact">
                Contact Us
              </Link>
            </Button>
          </div>

          <div className="mt-12 text-center">
            <p className="text-xl font-semibold">September 5-7, 2025</p>
            <p className="text-gray-300">IIT Kanpur, Uttar Pradesh, India</p>
          </div>
        </div>
      </div>
    </section>
  )
}
