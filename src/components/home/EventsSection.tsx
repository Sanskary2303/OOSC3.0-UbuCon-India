import Link from "next/link"
import { Button } from "@/components/ui/button"

const events = [
  {
    id: "talks",
    icon: "fa-graduation-cap",
    title: "Talks",
    description: "Explore insightful talks by industry leaders and experts, covering a wide range of topics from cutting-edge technologies to career development.",
    link: "/events/talks"
  },
  {
    id: "workshops",
    icon: "fa-users",
    title: "Workshops",
    description: "Hands-on workshops designed to deepen your skills and knowledge in specific areas, led by experienced instructors in interactive sessions.",
    link: "/events/workshops"
  },
  {
    id: "hackathon",
    icon: "fa-trophy",
    title: "Hackathon",
    description: "Join our hackathon and showcase your coding prowess. Compete with fellow developers to solve real-world challenges and win exciting prizes.",
    link: "/events/hackathon"
  },
  {
    id: "networking",
    icon: "fa-cutlery",
    title: "Networking Dinner",
    description: "Connect with like-minded professionals and speakers over a delightful networking dinner, fostering collaboration and new opportunities.",
    link: "/events/networking"
  },
  {
    id: "closing",
    icon: "fa-flag-checkered",
    title: "Closing Ceremony",
    description: "Celebrate the successful conclusion of our event with the closing ceremony. Recognize outstanding contributions, reflect on key learnings, and enjoy a memorable wrap-up.",
    link: "/events/closing"
  },
]

export default function EventsSection() {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Events</h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto mb-6" />
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Dive into our diverse range of events designed to engage, educate, and inspire the open-source community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div key={event.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="p-6">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-white text-2xl">
                    {/* Icon placeholder - would use proper icons in production */}
                    {event.title.charAt(0)}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-center text-gray-900 dark:text-white">{event.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 text-center">{event.description}</p>
                <div className="text-center">
                  <Button asChild variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white dark:border-blue-400 dark:text-blue-300 dark:hover:bg-blue-500">
                    <Link href={event.link}>
                      Learn More
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-[#1d3958] hover:bg-[#152b44] dark:bg-[#2a4c76] dark:hover:bg-[#1d3958] text-white">
            <Link href="/events">
              View All Events
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
