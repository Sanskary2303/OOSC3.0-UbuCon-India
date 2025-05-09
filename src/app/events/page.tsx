import PageWrapper from "@/components/layout/PageWrapper";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// Define conference tracks based on the Indico page
const tracks = [
  {
    id: "oosc-tech",
    name: "OOSC: Technical",
    description: "Technical sessions focused on open source technologies, development practices, and code contributions.",
    color: "bg-blue-600",
    textColor: "text-blue-600 dark:text-blue-400"
  },
  {
    id: "oosc-community",
    name: "OOSC: Community",
    description: "Sessions focused on community building, open source governance, and promoting diversity in open source.",
    color: "bg-blue-400",
    textColor: "text-blue-500 dark:text-blue-300"
  },
  {
    id: "ubucon-tech",
    name: "UbuCon: Technical",
    description: "Technical talks and demos focused on Ubuntu, including development, deployment, and best practices.",
    color: "bg-[#e95420]",
    textColor: "text-[#e95420] dark:text-[#ff7a4d]"
  },
  {
    id: "ubucon-community",
    name: "UbuCon: Community",
    description: "Ubuntu community discussions, LoCo team activities, and Ubuntu advocacy.",
    color: "bg-[#ff7a4d]",
    textColor: "text-[#e95420] dark:text-[#ff7a4d]"
  },
  {
    id: "workshop",
    name: "Workshops",
    description: "Interactive hands-on sessions for practical skill development across OOSC and UbuCon topics.",
    color: "bg-purple-500",
    textColor: "text-purple-600 dark:text-purple-400"
  }
];

export default function EventsPage() {
  return (
    <PageWrapper>
      <div className="container mx-auto px-6 py-24 pt-32 md:pt-40">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Conference Program</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Join us at OOSC 3.0 & UbuCon India to explore the latest in open source and Ubuntu
            through our diverse program tracks, September 5-7, 2025.
          </p>
        </div>

        {/* Date and Location */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-lg p-6 mb-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h2 className="text-xl font-bold mb-2">September 5-7, 2025</h2>
              <p className="text-gray-600 dark:text-gray-300">IIT Kanpur, Uttar Pradesh, India</p>
            </div>
            <Button asChild className="mt-4 md:mt-0 bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800">
              <Link href="/register">
                Keep Updated
              </Link>
            </Button>
          </div>
        </div>

        {/* Program Tracks */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Program Tracks</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tracks.map((track) => (
              <div 
                key={track.id} 
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border-t-4"
                style={{ borderColor: track.color.replace('bg-', '').includes('#') ? track.color.replace('bg-', '') : undefined }}
              >
                <div className="p-6">
                  <h3 className={`text-xl font-bold mb-3 ${track.textColor}`}>{track.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{track.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call for Proposals */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-12">
          <h2 className="text-2xl font-bold mb-4">Call for Proposals</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            We invite speakers from across the open source and Ubuntu communities to submit proposals for talks, 
            workshops, and panel discussions. Share your expertise, projects, and experiences with our audience.
          </p>
          
          <div className="space-y-4 mb-6">
            <div className="flex items-start">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 dark:text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Submit Your Proposal</h4>
                <p className="text-gray-600 dark:text-gray-300">Visit our Indico page to submit your proposal for OOSC 3.0 & UbuCon India.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 dark:text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Important Dates</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  <strong>Submission Deadline:</strong> June 16, 2025<br />
                  {/* <strong>Notification of Acceptance:</strong> July 15, 2025<br />
                  <strong>Final Program Announcement:</strong> August 1, 2025 */}
                </p>
              </div>
            </div>
          </div>
          
          <Button asChild className="bg-[#1d3958] hover:bg-[#152b44] dark:bg-[#2a4c76] dark:hover:bg-[#1d3958]">
            <Link href="https://events.canonical.com/event/134/abstracts/" target="_blank" rel="noopener noreferrer">
              Submit via Indico
            </Link>
          </Button>
        </div>

        {/* OOSC & UbuCon Dual-Track Structure */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Dual-Track Conference</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border-t-4 border-blue-500">
              <h3 className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400">
                OOSC 3.0
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                The Opportunity Open Source Conference brings together open source enthusiasts, developers, and leaders to 
                share knowledge and experiences across a wide range of open source technologies and communities.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">Open source project showcases</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">Technical deep dives</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">Community building workshops</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border-t-4 border-[#e95420]">
              <h3 className="text-xl font-bold mb-4 text-[#e95420] dark:text-[#ff7a4d]">
                UbuCon India
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                UbuCon India focuses on Ubuntu and its ecosystem, bringing together Ubuntu users, developers, and 
                community members for knowledge sharing and collaboration.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-[#e95420] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">Ubuntu technical sessions</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-[#e95420] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">Community-led workshops</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-[#e95420] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">Ubuntu ecosystem discussions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Program Highlights Coming Soon */}
        <div className="bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg p-6 text-center">
          <h2 className="text-xl font-bold mb-4">Full Program Coming Soon</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            The complete program schedule with session details will be announced after the call for proposals closes.
            Check back later or subscribe to receive updates.
          </p>
          <Button asChild className="bg-[#1d3958] hover:bg-[#152b44] dark:bg-[#2a4c76] dark:hover:bg-[#1d3958]">
            <Link href="/register">
              Keep Updated
            </Link>
          </Button>
        </div>
      </div>
    </PageWrapper>
  );
}
