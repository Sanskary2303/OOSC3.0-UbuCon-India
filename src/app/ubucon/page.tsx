import PageWrapper from "@/components/layout/PageWrapper";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, FileText } from "lucide-react";

export default function UbuConPage() {
  return (
    <PageWrapper>
      <div className="container mx-auto px-6 py-24 pt-32 md:pt-40">
        <div className="mb-12 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-[#e95420]">UbuCon India</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            The premier Ubuntu-focused conference in India, co-located with OOSC 3.0
          </p>
          
          {/* Indico Quick Links */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <Button asChild className="bg-[#e95420] hover:bg-[#c7471b]">
              <Link href="https://events.canonical.com/event/134/" target="_blank" rel="noopener noreferrer">
                <Calendar className="mr-2 h-4 w-4" />
                Indico Event Page
              </Link>
            </Button>
            <Button asChild className="bg-[#772953] hover:bg-[#5e2043]">
              <Link href="https://events.canonical.com/event/134/abstracts/" target="_blank" rel="noopener noreferrer">
                <FileText className="mr-2 h-4 w-4" />
                Submit a Proposal
              </Link>
            </Button>
          </div>
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
                <Link href="/register" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Register
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-[#e95420] text-[#e95420] hover:bg-[#e95420] hover:text-white">
                <Link href="https://events.canonical.com/event/134/abstracts/" target="_blank" rel="noopener noreferrer">
                  <FileText className="mr-2 h-4 w-4" />
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
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border-t-4 border-[#e95420]">
              <h3 className="text-xl font-semibold mb-3">Technical Sessions</h3>
              <p className="mb-4 dark:text-gray-300">In-depth presentations on Ubuntu development, deployment strategies, security practices, and more from community experts.</p>
              <Button asChild variant="outline" className="w-full border-[#e95420] text-[#e95420] hover:bg-[#e95420] hover:text-white dark:border-[#e95420] dark:text-[#e95420] dark:hover:bg-[#e95420]">
                {/* <Link href="https://events.canonical.com/event/134/" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Technical Track
                </Link> */}
              </Button>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border-t-4 border-[#e95420]">
              <h3 className="text-xl font-semibold mb-3">Hands-on Workshops</h3>
              <p className="mb-4 dark:text-gray-300">Interactive workshops covering Ubuntu development, snap packaging, Ubuntu Server, and other practical skills for users and developers.</p>
              <Button asChild variant="outline" className="w-full border-[#e95420] text-[#e95420] hover:bg-[#e95420] hover:text-white dark:border-[#e95420] dark:text-[#e95420] dark:hover:bg-[#e95420]">
                {/* <Link href="https://events.canonical.com/event/134/" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Workshop Track
                </Link> */}
              </Button>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border-t-4 border-[#e95420]">
              <h3 className="text-xl font-semibold mb-3">Community Building</h3>
              <p className="mb-4 dark:text-gray-300">Networking opportunities, community discussions, and collaboration sessions to strengthen the Ubuntu community in India.</p>
              <Button asChild variant="outline" className="w-full border-[#e95420] text-[#e95420] hover:bg-[#e95420] hover:text-white dark:border-[#e95420] dark:text-[#e95420] dark:hover:bg-[#e95420]">
                {/* <Link href="https://events.canonical.com/event/134/" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Community Track
                </Link> */}
              </Button>
            </div>
          </div>
        </div>

        {/* Indico Event Details Box */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md p-6 mb-16 border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold mb-4 text-center">Event Details on Indico</h2>
          <p className="text-center mb-6 dark:text-gray-300">
            Find all information about UbuCon India on official UbuCon India  page.
          </p>
          <div className="flex justify-center">
            <Button asChild size="lg" className="bg-[#e95420] hover:bg-[#c7471b]">
              <Link href="" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Visit UbuCon India 
              </Link>
            </Button>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-6">Join Us</h2>
          <p className="mb-8 max-w-3xl mx-auto dark:text-gray-300">
            UbuCon India is a unique opportunity to connect with the Ubuntu community, learn from experts,
            and contribute to the future of Ubuntu in India. We look forward to seeing you there!
          </p>
          <Button asChild size="lg" className="bg-[#e95420] hover:bg-[#c7471b]">
            <Link href="/register" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Register for UbuCon India
            </Link>
          </Button>
        </div>
      </div>
    </PageWrapper>
  );
}
