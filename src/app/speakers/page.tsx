import PageWrapper from "@/components/layout/PageWrapper";
import SpeakerCard from "@/components/speakers/SpeakerCard";
import { speakers } from "./speakerData";

export default function SpeakersPage() {
  const allowedTracks = ["oosc", "ubucon", "both"] as const;
  return (
    <PageWrapper>
      <div className="container mx-auto px-6 py-24 pt-32 md:pt-40 w-full">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Speakers</h1>
        <div className="flex flex-col md:flex-row flex-wrap gap-4 w-full">
          {speakers.map((speaker) => (
            <div key={speaker.id} className="w-full lg:w-[calc(50%-8px)]">
              <SpeakerCard 
                {...speaker}
                track={
                  allowedTracks.includes(speaker.track as any)
                    ? (speaker.track as "oosc" | "ubucon" | "both")
                    : undefined
                }
              />
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}
