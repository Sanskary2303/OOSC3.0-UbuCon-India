import Image from "next/image"
import Link from "next/link"

// Example sponsors
const sponsors = [
  {
    id: "canonical",
    name: "Canonical",
    logo: "/img/logos/canonical.png",
    url: "https://canonical.com",
    tier: "platinum"
  },
  {
    id: "linux-foundation",
    name: "The Linux Foundation",
    logo: "/img/logos/linux-foundation.png",
    url: "https://linuxfoundation.org",
    tier: "gold"
  },
  {
    id: "zephyr",
    name: "Zephyr",
    logo: "/img/logos/zephyr.png",
    url: "https://zephyrproject.org",
    tier: "gold"
  },
  {
    id: "openprinting",
    name: "Open Printing",
    logo: "/img/logos/openprinting.png",
    url: "https://openprinting.github.io",
    tier: "platinum"
  }
]

export default function SponsorsSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Partners</h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto mb-6" />
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We're proud to collaborate with these industry leaders to bring you an exceptional open source experience.
          </p>
        </div>

        {/* Platinum Sponsors */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold text-center mb-8 text-gray-700 dark:text-gray-300">Platinum Partners</h3>
          <div className="flex justify-center">
            {sponsors
              .filter(sponsor => sponsor.tier === "platinum")
              .map(sponsor => (
                <Link
                  key={sponsor.id}
                  href={sponsor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-8 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
                >
                  <div className="relative w-64 h-24">
                    <Image
                      src={sponsor.logo}
                      alt={sponsor.name}
                      fill
                      sizes="100%"
                      className="object-contain"
                    />
                  </div>
                </Link>
              ))}
          </div>
        </div>

        {/* Gold Sponsors */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-center mb-8 text-gray-700 dark:text-gray-300">Gold Partners</h3>
          <div className="flex flex-wrap justify-center">
            {sponsors
              .filter(sponsor => sponsor.tier === "gold")
              .map(sponsor => (
                <Link
                  key={sponsor.id}
                  href={sponsor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-6 mb-8 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
                >
                  <div className="relative w-48 h-20">
                    <Image
                      src={sponsor.logo}
                      alt={sponsor.name}
                      fill
                      sizes="100%"
                      className="object-contain"
                    />
                  </div>
                </Link>
              ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Interested in becoming a sponsor or partner for OOSC 3.0?
          </p>
          <Link
            href="/sponsors"
            className="inline-block px-6 py-3 bg-[#1d3958] dark:bg-[#2a4c76] text-white rounded-md hover:bg-[#152b44] dark:hover:bg-[#1d3958] transition-colors duration-300"
          >
            Become a Sponsor
          </Link>
        </div>
      </div>
    </section>
  )
}
