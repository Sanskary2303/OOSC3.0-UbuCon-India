import PageWrapper from "@/components/layout/PageWrapper";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <PageWrapper>
      <div className="container mx-auto px-6 py-24 pt-32 md:pt-40">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg mb-8">
              Have questions or need more information about OOSC 3.0 & UbuCon India?
              Fill out the form and we'll get back to you as soon as possible.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <span className="mr-2 text-xl">📍</span>
                <div>
                  <h3 className="font-semibold">Location</h3>
                  <p>IIT Kanpur, Uttar Pradesh, India</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="mr-2 text-xl">📧</span>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <a href="mailto:oosc2025.team@gmail.com" className="text-blue-600 hover:underline">oosc2025.team@gmail.com</a>
                </div>
              </div>
              {/* <div className="flex items-start">
                <span className="mr-2 text-xl">📱</span>
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <a href="tel:+91 " className="hover:underline">+91 </a>
                </div>
              </div> */}
            </div>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-6">Send us a message</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  placeholder="How can we help?"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Your message"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <Button className="w-full bg-[#1d3958]">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
