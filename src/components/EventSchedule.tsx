"use client";

import React, { useMemo, useState, useEffect } from "react";
import { Event } from "@/types/event";
import { MapPin, User, Video } from "lucide-react";

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
  
  // UPDATED: Added border colors for Ongoing/Next Up and increased border width
  const containerStyles = [
    "relative bg-white rounded-xl shadow-md p-6 border-2 flex flex-col transition-all duration-300", // Using border-2 for visibility
    isOngoing ? "border-red-500" :                 // Red border for Ongoing
    isNextUp ? "border-orange-500" :               // Orange border for Next Up
    isPast ? "bg-gray-50 border-gray-100 opacity-70" :
    "border-gray-100 hover:shadow-lg"             // Default for upcoming
  ].join(" ");

  const timeTextColor = isPast ? "text-gray-500" : "text-orange-600";
  const titleTextColor = isPast ? "text-gray-700" : "text-gray-800";
  const descriptionTextColor = "text-gray-600";
  const detailsTextColor = "text-gray-500";

  // Badge colors remain the same
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

export default EventSchedule;