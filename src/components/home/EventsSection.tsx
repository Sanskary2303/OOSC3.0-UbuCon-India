import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GraduationCap, Users, Trophy } from "lucide-react";
import { Event } from "@/types/event";

// Local formatTime function, since we are not creating a new utils file.
const formatTime = (date: Date) => {
  return date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
};

const events: Event[] = [
  {
    id: "talks",
    icon: GraduationCap,
    title: "Talks",
    description: "Explore insightful talks by industry leaders and experts, covering a wide range of topics from cutting-edge technologies to career development.",
    link: "/speakers",
    startTime: new Date("2025-09-04T10:00:00"),
    endTime: new Date("2025-09-04T12:00:00"),
    mode: "In Person",
  },
  {
    id: "workshops",
    icon: Users,
    title: "Workshops",
    description: "Hands-on workshops designed to deepen your skills and knowledge in specific areas, led by experienced instructors in interactive sessions.",
    link: "/events",
    startTime: new Date("2025-09-04T10:00:00"),
    endTime: new Date("2025-09-04T16:00:00"),
    mode: "In Person",
  },
  {
    id: "hackathon",
    icon: Trophy,
    title: "Hackathon",
    description: "Join our hackathon and showcase your coding prowess. Compete with fellow developers to solve real-world challenges and win exciting prizes.",
    link: "/hackathon",
    startTime: new Date("2025-09-05T10:00:00"),
    endTime: new Date("2025-09-05T21:00:00"),
    mode: "In Person",
  },
];

export default function EventsSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Events
          </h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto mb-6" />
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Dive into our diverse range of events designed to engage, educate, and inspire the open-source community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => {
            const Icon = event.icon;
            return (
              <div
                key={event.id}
                className="bg-white dark:bg-gray-800/50 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="p-6 flex flex-col h-full">
                  {Icon && (
                    <div className="w-16 h-16 bg-blue-500 dark:bg-blue-600 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition">
                      <Icon className="text-white w-8 h-8" />
                    </div>
                  )}
                  <h3 className="text-xl font-bold mb-3 text-center text-gray-900 dark:text-white">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-center flex-grow">
                    {event.description}
                  </p>
                  {event.room && (
                    <p className="text-sm text-center text-blue-600 dark:text-blue-400 font-medium mb-2">
                      📍 {event.room}
                    </p>
                  )}
                  {event.link && (
                    <div className="text-center mt-auto">
                      <Button
                        asChild
                        variant="outline"
                        className="border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white dark:border-blue-400 dark:text-blue-300 dark:hover:bg-blue-500 dark:hover:text-white"
                      >
                        <Link href={event.link}>Learn More</Link>
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
          <Button
            asChild
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-lg px-8"
          >
            <Link href="/calendar">View All Events</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

