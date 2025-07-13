import PageWrapper from "@/components/layout/PageWrapper";
import React from "react";
import { Trophy, Gem, Handshake, Medal } from "lucide-react";
import SponsorForm from "@/components/SponsorForm/spf";

// Type definition including description
type Slab = {
  name: string;
  price: string;
  icon: React.ReactNode;
  highlight?: boolean;
  description?: string;
};

// Sponsorship slabs with descriptions
const slabs: Slab[] = [
  {
    name: "Title Sponsor",
    price: "₹5,00,000+",
    icon: <Trophy className="w-8 h-8 text-yellow-500" />,
    highlight: true,
    description: "Gain premier visibility as the Title Sponsor of OOSC’25 with branding across all events, website, and hackathons. Reach 2500+ national and international participants, engage directly via talks, and receive a dedicated problem statement in the flagship hackathon.",
  },
  {
    name: "Co-Title Sponsor",
    price: "₹4,00,000+",
    icon: <Medal className="w-8 h-8 text-yellow-400" />,
    description: "Enjoy premier branding as the Co-Title Sponsor of OOSC’25 with extensive visibility across all event materials, website, and social media. Engage over 2,000 participants globally, feature in talks, workshops, and hackathons, and gain publicity through print, digital, and media coverage.",
  },
  {
    name: "Platinum Sponsor",
    price: "₹3,00,000+",
    icon: <Gem className="w-8 h-8 text-blue-400" />,
    description: "As a Platinum Sponsor of OOSC’25, gain premium branding across all event platforms and high visibility among 2000+ participants. Enjoy extensive digital, print, and media publicity, along with dedicated engagement through stalls, talks, and hackathons.",
  },
  {
    name: "Gold Sponsor",
    price: "₹1,50,000+",
    icon: <Medal className="w-8 h-8 text-amber-400" />,
    description: "As a Gold Sponsor of OOSC’25, enjoy significant branding across the event website, materials, and social media, with exposure to 2000+ attendees. Benefit from stall space, talk slots, and national-level publicity through print, digital, and media coverage.",
  },
  {
    name: "Silver Sponsor",
    price: "₹75,000+",
    icon: <Medal className="w-8 h-8 text-gray-400" />,
    description: "As a Silver Sponsor of OOSC’25, receive strong visibility across the website, events, and media promotions, including talks and hackathons. Benefit from branding through print, social media, and video, plus engage directly via stall space and talk slots.",
  },
  {
    name: "Community / Startup Partner",
    price: "₹25,000 – ₹50,000",
    icon: <Handshake className="w-8 h-8 text-green-500" />,
    description: "Special slab for startups and community-led initiatives (₹25,000 – ₹50,000).Includes logo on website, social media mentions, and optional booth space to showcase products or initiatives.",
  },
];

export default function SponsorshipSlabs() {
  return (
    <PageWrapper>
      <div className="px-4 sm:px-8 lg:px-16 py-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mt-5 mb-10 tracking-tight text-neutral-900 dark:text-neutral-100">
          Sponsorship Slabs
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {slabs.map((slab, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-6 sm:p-8 text-center border transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1 ${slab.highlight
                ? "border-yellow-400 dark:border-yellow-500"
                : "border-neutral-300 dark:border-neutral-700"
                }`}
            >
              <div className="flex justify-center mb-4">{slab.icon}</div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-neutral-800 dark:text-neutral-100">
                {slab.name}
              </h3>
              <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-300 font-medium">
                {slab.price}
              </p>
              {slab.description && (
                <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
                  {slab.description}
                </p>
              )}
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <a href="https://drive.google.com/uc?export=download&id=1oy3cB3bTQbsb2a-Lx4rukKbsqZ5zup3L"
            download="Prospectus_OOSC_2025.pdf"
            className="bg-indigo-500 text-white px-4 py-1.5 rounded hover:bg-indigo-800">
            📄 Download Prospectus
          </a>
        </div>
        <SponsorForm />
      </div>
    </PageWrapper>
  );
}