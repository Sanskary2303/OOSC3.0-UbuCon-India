import PageWrapper from "@/components/layout/PageWrapper";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export default function RegisterPage() {
  return (
    <PageWrapper>
      <div className="container mx-auto px-6 py-24 pt-32 md:pt-40">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Stay Updated</h1>
        <p className="text-lg mb-8">
          Registration for OOSC 3.0 & UbuCon India will open soon. You can also visit our Indico event page to keep updated about the conference.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border-t-4 border-[#1d3958] dark:border-[#2a4c76]">
            <h2 className="text-xl font-semibold mb-4 dark:text-white">Conference Registration</h2>
            <p className="mb-6 dark:text-gray-300">
               Registration will open soon.
            </p>
            <Button asChild className="w-full bg-[#1d3958] dark:bg-[#2a4c76]">
              <Link href="https://events.canonical.com/event/134/" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Visit Indico Event Page
              </Link>
            </Button>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border-t-4 border-[#e95420]">
            <h2 className="text-xl font-semibold mb-4 dark:text-white">Submit a Proposal</h2>
            <p className="mb-6 dark:text-gray-300">
              Interested in speaking at OOSC 3.0 & UbuCon India? Submit your talk or workshop proposal through our Call for Abstract on Indico.
            </p>
            <Button asChild className="w-full bg-[#e95420] hover:bg-[#c7471b]">
              <Link href="https://events.canonical.com/event/134/abstracts/" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Submit a Proposal
              </Link>
            </Button>
          </div>
        </div>
        
        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800 mb-8">
          <h2 className="text-xl font-semibold mb-2 dark:text-white">Stay Connected</h2>
          <p className="dark:text-gray-300 mb-4">
            Join our mailing list to receive updates about registration opening, speaker announcements, and event details.
          </p>
          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Email address
              </label>
              <input
                type="email"
                id="email"
                placeholder="your@email.com"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800">
              Subscribe for Updates
            </Button>
          </form>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-400 mb-4">Need help with registration or have questions?</p>
          <Button asChild variant="outline">
            <Link href="/contact">
              Contact Us
            </Link>
          </Button>
        </div>
      </div>
    </PageWrapper>
  );
}
