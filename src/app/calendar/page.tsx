"use client";

import React, { useMemo, useState, useEffect } from "react";
import { MapPin, User, Video } from "lucide-react";

// Define the Event type, as it was previously imported
interface Event {
  id: string;
  title: string;
  description: string;
  startTime: Date;
  endTime: Date;
  room?: string;
  mode?: "In Person" | "Remote";
}

// Create a placeholder for the PageWrapper component to resolve the import error
const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="bg-gray-50 min-h-screen">{children}</div>;
};

// --- EventSchedule Component and its sub-components ---
// This code was previously in a separate file, but is included here to fix the import error.

const formatTime = (date: Date) => {
  return date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
};

// A single, unified component for all event cards
const EventCard = ({ 
  event, 
  isOngoing, 
  isNextUp, 
  isPast 
}: { 
  event: Event, 
  isOngoing: boolean, 
  isNextUp: boolean, 
  isPast?: boolean
}) => {
  const status = isOngoing ? 'Ongoing' : isNextUp ? 'Next Up' : null;
  
  const containerStyles = [
    "relative bg-white rounded-xl shadow-md p-6 border-2 flex flex-col transition-all duration-300",
    isOngoing ? "border-red-500" :
    isNextUp ? "border-orange-500" :
    isPast ? "bg-gray-50 border-gray-100 opacity-70" :
    "border-gray-100 hover:shadow-lg"
  ].join(" ");

  const timeTextColor = isPast ? "text-gray-500" : "text-orange-600";
  const titleTextColor = isPast ? "text-gray-700" : "text-gray-800";
  const descriptionTextColor = "text-gray-600";
  const detailsTextColor = "text-gray-500";
  const statusBadgeColor = isOngoing ? "bg-red-100 text-red-700" : "bg-orange-100 text-orange-700";

  return (
    <div className={containerStyles}>
      {status && (
        <div className={`absolute top-3 right-3 text-xs font-bold px-2 py-1 rounded ${statusBadgeColor}`}>
          {status}
        </div>
      )}
      <p className={`text-sm font-semibold ${timeTextColor}`}>
        {formatTime(event.startTime)} – {formatTime(event.endTime)}
      </p>
      <h3 className={`text-lg font-bold mt-2 pr-16 ${titleTextColor}`}>{event.title}</h3>
      <p className={`mt-1 flex-grow ${descriptionTextColor}`}>{event.description}</p>
      <div className={`flex items-center gap-4 mt-3 text-sm ${detailsTextColor}`}>
        {event.room && (
          <span className="flex items-center gap-1.5">
            <MapPin size={14} />
            {event.room}
          </span>
        )}
        {event.mode && (
          <span className="flex items-center gap-1.5">
            {event.mode === 'In Person' ? <User size={14} /> : <Video size={14} />}
            {event.mode}
          </span>
        )}
      </div>
    </div>
  );
};

const EventSchedule: React.FC<{ events: Event[] }> = ({ events }) => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  const { pastEvents, eventsForDisplay, ongoingEventIds, nextUpEventIds } = useMemo(() => {
    if (!events?.length) {
      return { 
        pastEvents: [], 
        eventsForDisplay: {} as Record<string, Event[]>, 
        ongoingEventIds: new Set<string>(), 
        nextUpEventIds: new Set<string>() 
      };
    }

    const sorted = [...events].sort((a, b) => a.startTime.getTime() - b.startTime.getTime());
    
    const ongoing = sorted.filter(e => now >= e.startTime && now < e.endTime);
    const past = sorted.filter(e => e.endTime < now);
    
    const futureOrOngoing = sorted.filter(e => e.endTime >= now);

    const upcomingForNextUpCheck = sorted.filter(e => e.startTime > now);
    const nextEventInList = upcomingForNextUpCheck[0] || null;
    const nextUp = nextEventInList ? sorted.filter(e => e.startTime.getTime() === nextEventInList.startTime.getTime()) : [];

    const groupedForDisplay = futureOrOngoing.reduce((acc: Record<string, Event[]>, event) => {
      const date = event.startTime.toISOString().split("T")[0];
      if (!acc[date]) acc[date] = [];
      acc[date].push(event);
      return acc;
    }, {});

    return { 
      pastEvents: past, 
      eventsForDisplay: groupedForDisplay, 
      ongoingEventIds: new Set(ongoing.map(e => e.id)), 
      nextUpEventIds: new Set(nextUp.map(e => e.id)) 
    };
  }, [events, now]);

  const [activeTab, setActiveTab] = useState<"past" | "upcoming">("upcoming");

  if (!events || events.length === 0) {
    return (
      <div className="text-center py-12 bg-gray-50 rounded-lg">
        <h3 className="text-2xl font-bold text-gray-700">No Events Scheduled</h3>
        <p className="text-gray-500 mt-2">Please check back later for updates.</p>
      </div>
    );
  }

  return (
    <div className="space-y-12">
      <div>
        <div className="flex gap-4 border-b pb-2">
          <button
            onClick={() => setActiveTab("upcoming")}
            className={`px-4 py-2 font-semibold ${activeTab === "upcoming" ? "border-b-2 border-orange-500 text-orange-600" : "text-gray-500"}`}
          >
            Schedule
          </button>
          <button
            onClick={() => setActiveTab("past")}
            className={`px-4 py-2 font-semibold ${activeTab === "past" ? "border-b-2 border-orange-500 text-orange-600" : "text-gray-500"}`}
          >
            Past Events
          </button>
        </div>

        <div className="mt-6">
          {activeTab === "upcoming" && (
            <>
              {Object.keys(eventsForDisplay).length > 0 ? (
                Object.keys(eventsForDisplay).map((day) => (
                  <div key={day} className="space-y-4 mb-8">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-4xl font-bold text-orange-500">{new Date(day).toLocaleDateString("en-US", { day: "numeric" })}</span>
                      <span className="text-xl font-bold">{new Date(day).toLocaleDateString("en-US", { month: "long" }).toUpperCase()}</span>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                      {eventsForDisplay[day].map((event: Event) => (
                        <EventCard 
                          key={event.id}
                          event={event}
                          isOngoing={ongoingEventIds.has(event.id)}
                          isNextUp={nextUpEventIds.has(event.id)}
                          isPast={false}
                        />
                      ))}
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-500 italic">No more upcoming events. The schedule is complete!</p>
              )}
            </>
          )}

          {activeTab === "past" && (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {pastEvents.length > 0 ? (
                pastEvents.map((event) => (
                  <EventCard
                    key={event.id}
                    event={event}
                    isOngoing={false}
                    isNextUp={false}
                    isPast={true}
                  />
                ))
              ) : (
                <p className="text-gray-500 italic">No past events yet.</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};


// --- Main Page Component ---

export default function CalendarPage() {
  const allEvents: Event[] = [
    // Day 1: Friday, 5th September 2025
    {
      id: "fri-1",
      title: "Opening Plenary",
      description: "Till Kamppeter & Aveek Basu",
      startTime: new Date("2025-09-05T10:30:00"),
      endTime: new Date("2025-09-05T10:50:00"),
      room: "Lecture hall 18",
      mode: "In Person",
    },
    {
      id: "fri-2",
      title: "Starting the Open Source Journey",
      description: "Aveek Basu",
      startTime: new Date("2025-09-05T10:50:00"),
      endTime: new Date("2025-09-05T11:30:00"),
      room: "Lecture hall 18",
      mode: "In Person",
    },
    {
      id: "fri-3",
      title: "Can human intelligence show the way for artificial intelligence?",
      description: "Francis Steen, Mark Turner",
      startTime: new Date("2025-09-05T10:50:00"),
      endTime: new Date("2025-09-05T11:10:00"),
      room: "lecture hall 12",
      mode: "Remote",
    },
    {
      id: "fri-4",
      title: "My LFX Mentorship Journey: From Application to KubeEdge Contributor",
      description: "Abhishek Kumar",
      startTime: new Date("2025-09-05T11:10:00"),
      endTime: new Date("2025-09-05T11:30:00"),
      room: "lecture hall 12",
      mode: "In Person",
    },
    {
      id: "fri-5",
      title: "Future of Open Source AI: From Cloud to the Edge",
      description: "Neeraj Poddar, Saiyam Patha",
      startTime: new Date("2025-09-05T11:30:00"),
      endTime: new Date("2025-09-05T12:10:00"),
      room: "Lecture hall 18",
      mode: "In Person",
    },
    {
      id: "fri-6",
      title: "Population AI and AgentTorch",
      description: "Hardik Jindal",
      startTime: new Date("2025-09-05T11:30:00"),
      endTime: new Date("2025-09-05T12:10:00"),
      room: "lecture hall 12",
      mode: "In Person",
    },
    {
      id: "fri-7",
      title: "Migration of whole country to GNU/Linux",
      description: "Mikhail Novosyolov",
      startTime: new Date("2025-09-05T12:10:00"),
      endTime: new Date("2025-09-05T12:50:00"),
      room: "Lecture hall 18",
      mode: "In Person",
    },
    {
      id: "fri-8",
      title: "Behaviorally Accurate Simulator for Multifunction Printers and Scanners",
      description: "Alexander Pevzner",
      startTime: new Date("2025-09-05T12:10:00"),
      endTime: new Date("2025-09-05T12:50:00"),
      room: "lecture hall 12",
      mode: "In Person",
    },
    {
      id: "fri-9",
      title: "Fuzzing Go and Python Projects in OSS-Fuzz: The OpenPrinting Case Study",
      description: "Mohammed Imaduddin",
      startTime: new Date("2025-09-05T12:50:00"),
      endTime: new Date("2025-09-05T13:30:00"),
      room: "Lecture hall 18",
      mode: "In Person",
    },
    {
      id: "fri-10",
      title: "EunoiaMind: Building Emotionally Intelligent AI on the Edge - Accessible, Reflective and Open Source",
      description: "Bhavanishankar Ravindra",
      startTime: new Date("2025-09-05T12:50:00"),
      endTime: new Date("2025-09-05T13:30:00"),
      room: "lecture hall 12",
      mode: "In Person",
    },
    {
      id: "fri-11",
      title: "Lunch Break",
      description: "Lunch will be provided for all attendees.",
      startTime: new Date("2025-09-05T13:30:00"),
      endTime: new Date("2025-09-05T15:00:00"),
      room: "",
    },
    {
      id: "fri-12",
      title: "OpenPrinting - We make printing just work! - 25 years of printing for FOSS",
      description: "Till Kamppeter",
      startTime: new Date("2025-09-05T15:00:00"),
      endTime: new Date("2025-09-05T15:40:00"),
      room: "Lecture hall 18",
      mode: "In Person",
    },
    {
      id: "fri-13",
      title: "Kernel to Runtime: inside a JavaScript engine",
      description: "Divy Srivastava",
      startTime: new Date("2025-09-05T15:20:00"),
      endTime: new Date("2025-09-05T15:40:00"),
      room: "lecture hall 12",
      mode: "Remote",
    },
    {
      id: "fri-14",
      title: "OpenPrinting - Q&A",
      description: "Till Kamppeter",
      startTime: new Date("2025-09-05T15:40:00"),
      endTime: new Date("2025-09-05T16:00:00"),
      room: "Lecture hall 18",
      mode: "In Person",
    },
    {
      id: "fri-15",
      title: "Accelerating Scilab Toolbox Creation Using AI",
      description: "Akash Sankaranarayanan, Nikitha Dhanabal",
      startTime: new Date("2025-09-05T15:40:00"),
      endTime: new Date("2025-09-05T16:00:00"),
      room: "lecture hall 12",
      mode: "In Person",
    },
    {
      id: "fri-16",
      title: "From Zero to LFX: How Three Friends Cracked Open Source and Landed KubeEdge Mentorships",
      description: "Abhishek Kumar",
      startTime: new Date("2025-09-05T16:05:00"),
      endTime: new Date("2025-09-05T16:45:00"),
      room: "Lecture hall 18",
      mode: "In Person",
    },
    {
      id: "fri-17",
      title: "Obstacle detection during Navigation using Convolutional Neural Networks with LSTM",
      description: "Yash Mishra",
      startTime: new Date("2025-09-05T16:05:00"),
      endTime: new Date("2025-09-05T16:25:00"),
      room: "lecture hall 12",
      mode: "In Person",
    },
    {
      id: "fri-18",
      title: "Intro to OSS-Fuzz: Build, Break, and Harden Open Source Software",
      description: "Mohammed Imaduddin",
      startTime: new Date("2025-09-05T16:00:00"),
      endTime: new Date("2025-09-05T17:30:00"),
      room: "lecture hall 13",
      mode: "In Person",
    },
    {
      id: "fri-19",
      title: "Google Summer of Code -- Panel and Q&A",
      description: "Aveek Basu, Till Kamppeter",
      startTime: new Date("2025-09-05T16:50:00"),
      endTime: new Date("2025-09-05T17:30:00"),
      room: "Lecture hall 18",
      mode: "In Person",
    },
    {
      id: "fri-20",
      title: "Towards Human‑Centric Evaluation of Security and Stability in Open Source Software",
      description: "Jiongchi Yu",
      startTime: new Date("2025-09-05T16:50:00"),
      endTime: new Date("2025-09-05T17:30:00"),
      room: "lecture hall 12",
      mode: "In Person",
    },
    {
      id: "fri-21",
      title: "Coffee Break",
      description: "Enjoy a refreshing coffee break.",
      startTime: new Date("2025-09-05T17:30:00"),
      endTime: new Date("2025-09-05T17:45:00"),
      room: "",
    },
    {
      id: "fri-22",
      title: "Snap and Ubuntu Core (Desktop) - Linux, as easy as a smartphone!",
      description: "Till Kamppeter",
      startTime: new Date("2025-09-05T17:45:00"),
      endTime: new Date("2025-09-05T18:25:00"),
      room: "Lecture hall 18",
      mode: "In Person",
    },
    {
      id: "fri-23",
      title: "Linux Kernel Testing Frameworks",
      description: "Shuah Khan",
      startTime: new Date("2025-09-05T17:45:00"),
      endTime: new Date("2025-09-05T18:05:00"),
      room: "lecture hall 12",
      mode: "Remote",
    },
    {
      id: "fri-24",
      title: "Six years of empowering open source communities",
      description: "Shuah Khan",
      startTime: new Date("2025-09-05T18:05:00"),
      endTime: new Date("2025-09-05T18:25:00"),
      room: "lecture hall 12",
      mode: "Remote",
    },
    {
      id: "fri-25",
      title: "MicroCeph: Build your S3 app without AWS!",
      description: "Utkarsh Bhatt",
      startTime: new Date("2025-09-05T17:45:00"),
      endTime: new Date("2025-09-05T19:15:00"),
      room: "lecture hall 13",
      mode: "In Person",
    },
    {
      id: "fri-26",
      title: "From Containers to Chip Design Classrooms: Leveraging Snap and Docker to Enable Open-Source EDA with eSim",
      description: "Jayanth Tatineni, Aishwarya Sinha, Sumanto Kar, Varad Patil, Shanthi Priya, Kannan M. Moudgalya",
      startTime: new Date("2025-09-05T18:30:00"),
      endTime: new Date("2025-09-05T18:50:00"),
      room: "Lecture hall 18",
      mode: "In Person",
    },
    {
      id: "fri-27",
      title: "Data Structures and Algorithms Visualizer (algorithima), with quiz and practice questions",
      description: "Manvith Kumar",
      startTime: new Date("2025-09-05T18:50:00"),
      endTime: new Date("2025-09-05T19:00:00"),
      room: "Lecture hall 18",
      mode: "In Person",
    },
    {
      id: "fri-28",
      title: "Data Center Virtualization 2025",
      description: "Saquib Akhtar",
      startTime: new Date("2025-09-05T19:00:00"),
      endTime: new Date("2025-09-05T19:10:00"),
      room: "Lecture hall 18",
      mode: "In Person",
    },
    {
      id: "fri-29",
      title: "Collaborative Innovation Strategies and Technological Development with Open Source",
      description: "Manuel Haro",
      startTime: new Date("2025-09-05T18:30:00"),
      endTime: new Date("2025-09-05T19:10:00"),
      room: "lecture hall 12",
      mode: "Remote",
    },
    // Day 2: Saturday, 6th September 2025
    {
      id: "sat-1",
      title: "Office Gob MX, a LibreOffice distribution for the Mexican government",
      description: "Adlair Cerecedo-Mendez",
      startTime: new Date("2025-09-06T11:00:00"),
      endTime: new Date("2025-09-06T11:40:00"),
      room: "Lecture hall 18",
      mode: "In Person",
    },
    {
      id: "sat-2",
      title: "The Dark Side of Free and Open-Source Software (FOSS)",
      description: "Ayush Ghai",
      startTime: new Date("2025-09-06T11:00:00"),
      endTime: new Date("2025-09-06T11:40:00"),
      room: "lecture hall 12",
      mode: "In Person",
    },
    {
      id: "sat-3",
      title: "Your app everywhere - Just in a Snap! - Interactive Workshop",
      description: "Till Kamppeter",
      startTime: new Date("2025-09-06T11:00:00"),
      endTime: new Date("2025-09-06T12:30:00"),
      room: "lecture hall 13",
      mode: "In Person",
    },
    {
      id: "sat-4",
      title: "An Offline AI Assistant for eSim: Easier, Accessible, Open-Source Circuit Design and Debugging",
      description: "Aditya Bhattacharya, Rudra Mani Upadhyay, Myo Thinzar Kyaw, Sumanto Kar, Varad Patil, Shanthi Priya, Kannan M. Moudgalya",
      startTime: new Date("2025-09-06T11:25:00"),
      endTime: new Date("2025-09-06T11:45:00"),
      room: "lecture hall 12",
      mode: "In Person",
    },
    {
      id: "sat-5",
      title: "Beyond Content Management: Drupal as an AI-Powered Digital Experience Hub",
      description: "Paritoshik Paul",
      startTime: new Date("2025-09-06T11:45:00"),
      endTime: new Date("2025-09-06T12:25:00"),
      room: "Lecture hall 18",
      mode: "In Person",
    },
    {
      id: "sat-6",
      title: "Pioneering Local AI on RISC-V: Building Industry-Ready AI PCs for the Next Computing Era",
      description: "Yuning Liang",
      startTime: new Date("2025-09-06T11:45:00"),
      endTime: new Date("2025-09-06T12:05:00"),
      room: "lecture hall 12",
      mode: "In Person",
    },
    {
        id: "sat-7",
        title: "Scaniverse Universal Scanner Drivers: One Solution for Every Distro",
        description: "Akarshan Kapoor",
        startTime: new Date("2025-09-06T12:10:00"),
        endTime: new Date("2025-09-06T12:50:00"),
        room: "lecture hall 12",
        mode: "In Person",
    },
    {
      id: "sat-8",
      title: "Building Adaptive, AI-Native Experiences with On-Device Intelligence",
      description: "Neeraj Poddar",
      startTime: new Date("2025-09-06T12:30:00"),
      endTime: new Date("2025-09-06T12:50:00"),
      room: "Lecture hall 18",
      mode: "In Person",
    },
    {
      id: "sat-9",
      title: "Designing for Everyone: Accessibility as a Core Value of Open Source",
      description: "Abelardo Valdez Poot",
      startTime: new Date("2025-09-06T12:55:00"),
      endTime: new Date("2025-09-06T13:35:00"),
      room: "Lecture hall 18",
      mode: "In Person",
    },
    {
      id: "sat-10",
      title: "Vibe Coding and Software Development Best Practices",
      description: "Ayush Ghai",
      startTime: new Date("2025-09-06T12:35:00"),
      endTime: new Date("2025-09-06T14:05:00"),
      room: "lecture hall 13",
      mode: "In Person",
    },
    {
      id: "sat-11",
      title: "Lunch Break",
      description: "Lunch will be provided for all attendees.",
      startTime: new Date("2025-09-06T13:35:00"),
      endTime: new Date("2025-09-06T15:00:00"),
      room: "",
    },
    {
      id: "sat-12",
      title: "How we built a pump monitoring system for Deutsche Bahn with wireless sensors using Zephyr RTOS",
      description: "Oliver Völckers",
      startTime: new Date("2025-09-06T15:00:00"),
      endTime: new Date("2025-09-06T15:40:00"),
      room: "Lecture hall 18",
      mode: "Remote",
    },
    {
      id: "sat-13",
      title: "Fixing Money with BOSS (Bitcoin + FOSS)",
      description: "Anmol Sharma",
      startTime: new Date("2025-09-06T15:00:00"),
      endTime: new Date("2025-09-06T15:40:00"),
      room: "lecture hall 12",
      mode: "In Person",
    },
    {
        id: "sat-14",
        title: "Zephyr RTOS: Building the IoT Future from the Ground Up",
        description: "Akarshan Kapoor",
        startTime: new Date("2025-09-06T15:30:00"),
        endTime: new Date("2025-09-06T17:00:00"),
        room: "lecture hall 13",
        mode: "In Person",
    },
    {
      id: "sat-15",
      title: "Harnessing the Swarm: A Practical Introduction to Open Source AI Models",
      description: "Lakshay Bandlish",
      startTime: new Date("2025-09-06T15:40:00"),
      endTime: new Date("2025-09-06T16:00:00"),
      room: "Lecture hall 18",
      mode: "In Person",
    },
    {
      id: "sat-16",
      title: "How to trust your peephole rewrites: automatically verifying them for arbitrary width!",
      description: "Siddharth Bhat",
      startTime: new Date("2025-09-06T15:40:00"),
      endTime: new Date("2025-09-06T16:00:00"),
      room: "lecture hall 12",
      mode: "Remote",
    },
    {
      id: "sat-17",
      title: "Intro to Bitcoin Design ( and How to Make It Accessible! )",
      description: "Vidushi Sharma",
      startTime: new Date("2025-09-06T16:05:00"),
      endTime: new Date("2025-09-06T16:45:00"),
      room: "Lecture hall 18",
      mode: "In Person",
    },
    {
      id: "sat-18",
      title: "FOSS technologies: a technological trend and the path to new business models",
      description: "Manuel Haro",
      startTime: new Date("2025-09-06T16:50:00"),
      endTime: new Date("2025-09-06T17:30:00"),
      room: "Lecture hall 18",
      mode: "Remote",
    },
    {
      id: "sat-19",
      title: "How We Built Plane in Public: Open Source, Community, and Challenges Along the Way",
      description: "Aaryan Khandelwal",
      startTime: new Date("2025-09-06T16:50:00"),
      endTime: new Date("2025-09-06T17:10:00"),
      room: "lecture hall 12",
      mode: "In Person",
    },
    {
        id: "sat-20",
        title: "From Open Source to OpenPrinting: My GSoC Journey and Project on Image Output Evaluation",
        description: "Sanskar Yaduka",
        startTime: new Date("2025-09-06T17:00:00"),
        endTime: new Date("2025-09-06T17:40:00"),
        room: "lecture hall 13",
        mode: "In Person",
    },
    {
        id: "sat-21",
        title: "Venturial and PyVNT: Simplifying CFD Case Creation in OpenFOAM",
        description: "Diptangshu Dey",
        startTime: new Date("2025-09-06T17:10:00"),
        endTime: new Date("2025-09-06T17:30:00"),
        room: "lecture hall 12",
        mode: "In Person",
    },
    {
        id: "sat-22",
        title: "A Real-Time Point-of-Care Assistant on Raspberry Pi for Medical Diagnostics",
        description: "Priyam Chakraborty, Suman Chakraborty",
        startTime: new Date("2025-09-06T17:30:00"),
        endTime: new Date("2025-09-06T17:40:00"),
        room: "lecture hall 12",
        mode: "In Person"
    },
    {
      id: "sat-23",
      title: "Buffer / Break",
      description: "A short break before the final session.",
      startTime: new Date("2025-09-06T17:40:00"),
      endTime: new Date("2025-09-06T18:00:00"),
      room: "",
    },
    {
      id: "sat-24",
      title: "Closing Plenary",
      description: "Till Kamppeter & Aveek Basu",
      startTime: new Date("2025-09-06T18:00:00"),
      endTime: new Date("2025-09-06T18:20:00"),
      room: "Lecture hall 18",
      mode: "In Person",
    },
  ];

  return (
    <PageWrapper>
      <div className="container mx-auto px-6 py-24 pt-32 md:pt-40">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 tracking-wide">
            Event Schedule
          </h1>
          <p className="text-lg text-gray-600 mt-2">
            Here's what we have planned. Check back for updates!
          </p>
        </div>

        <EventSchedule events={allEvents} />
      </div>
    </PageWrapper>
  );
}