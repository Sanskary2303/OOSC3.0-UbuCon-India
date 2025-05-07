import PageWrapper from "@/components/layout/PageWrapper";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function UbuConPage() {
  return (
    <PageWrapper>
      <div className="container mx-auto px-6 py-24 pt-32 md:pt-40">
        <div className="mb-12 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-[#e95420]">UbuCon India</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            The premier Ubuntu-focused conference in India, co-located with OOSC 3.0
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">About UbuCon India</h2>
            <p className="mb-4">
              UbuCon India is a conference centered around the Ubuntu operating system and its ecosystem.
              Co-located with OOSC 3.0, this event brings together Ubuntu users, developers, community members,
              and enthusiasts from across India and beyond.
            </p>
            <p className="mb-6">
              Whether you're a long-time Ubuntu user, a contributor to the ecosystem, or simply curious about
              open source and Ubuntu, UbuCon India offers something for everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-[#e95420] hover:bg-[#c7471b]">
                <Link href="/register">
                  Register Now
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-[#e95420] text-[#e95420] hover:bg-[#e95420] hover:text-white">
                <Link href="https://events.canonical.com/event/134/abstracts/">
                  Call for Proposals
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative w-full max-w-md h-72">
              <Image
                src="/img/logos/canonical.png"
                alt="Ubuntu"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">What to Expect</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-[#e95420]">
              <h3 className="text-xl font-semibold mb-3">Technical Sessions</h3>
              <p>In-depth presentations on Ubuntu development, deployment strategies, security practices, and more from Canonical engineers and community experts.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-[#e95420]">
              <h3 className="text-xl font-semibold mb-3">Hands-on Workshops</h3>
              <p>Interactive workshops covering Ubuntu development, snap packaging, Ubuntu Server, and other practical skills for users and developers.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-[#e95420]">
              <h3 className="text-xl font-semibold mb-3">Community Building</h3>
              <p>Networking opportunities, community discussions, and collaboration sessions to strengthen the Ubuntu community in India.</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-6">Join Us</h2>
          <p className="mb-8 max-w-3xl mx-auto">
            UbuCon India is a unique opportunity to connect with the Ubuntu community, learn from experts,
            and contribute to the future of Ubuntu in India. We look forward to seeing you there!
          </p>
          <Button asChild size="lg" className="bg-[#e95420] hover:bg-[#c7471b]">
            <Link href="/register">
              Register for UbuCon India
            </Link>
          </Button>
        </div>
      </div>
    </PageWrapper>
  );
}
