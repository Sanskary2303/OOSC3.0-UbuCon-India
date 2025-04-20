import PageWrapper from "@/components/layout/PageWrapper";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function RegisterPage() {
  return (
    <PageWrapper>
      <div className="container mx-auto px-6 py-24 pt-32 md:pt-40">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Register</h1>
        <p className="text-lg mb-8">
          Registration for OOSC 3.0 & UbuCon India will open soon. Please check back later.
        </p>
        <div className="max-w-lg mx-auto bg-gray-50 p-8 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Sign up for updates</h2>
          <p className="mb-6">
            Join our mailing list to receive updates about registration, speakers, and more.
          </p>
          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email address
              </label>
              <input
                type="email"
                id="email"
                placeholder="your@email.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <Button className="w-full bg-[#1d3958]">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </PageWrapper>
  );
}
