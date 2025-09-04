import PageWrapper from "@/components/layout/PageWrapper";
import Image from "next/image";
import banner from "./hackathon_banner.png";

export default function HackathonPage() {
  return (
    <PageWrapper>
      <div className="container mx-auto px-6 py-24 pt-32 md:pt-40">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center">Hackathon</h1>
        <div className="mt-12 flex justify-center">
          <div className="w-[600px] overflow-hidden rounded-2xl shadow-lg">
            <Image
              src={banner}
              alt="Hackathon Banner"
              width={600}
              height={600}
              className="object-cover object-bottom "
            />
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
