import PageWrapper from "@/components/layout/PageWrapper";
import SpeakerCard from "@/components/speakers/SpeakerCard";
import { speakers } from "./speakerData";

export default function SpeakersPage() {

  return (
    <PageWrapper>
      <div className="container mx-auto px-6 py-24 pt-32 md:pt-40 w-full">
        <h1 className="text-3xl md:text-5xl font-bold mb-10 text-{themeProvider.theme === 'dark' ? 'white' : 'black'}">
          Meet the Speakers
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker) => (
            <SpeakerCard
              bio={""}
              key={speaker.id}
              {...speaker}
              track={
                speaker.track === "oosc" ||
                speaker.track === "ubucon" ||
                speaker.track === "both"
                  ? speaker.track
                  : undefined
              }
            />
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}