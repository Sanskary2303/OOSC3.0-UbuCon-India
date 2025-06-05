import PageWrapper from "@/components/layout/PageWrapper";
import React from "react";
import { Trophy, Gem, Handshake, Medal } from "lucide-react";
import SponsorForm from "@/components/SponsorForm/spf";
type Slab = {
  name: string;
  price: string;
  icon: React.ReactNode;
  highlight?: boolean;
};
const slabs: Slab[] = [
  { name: "Title Sponsor", price: "₹5,00,000+", icon: <Trophy className="w-8 h-8 text-yellow-500" />, highlight: true },
  { name: "Co-Title Sponsor", price: "₹4,00,000+", icon: <Medal className="w-8 h-8 text-yellow-400" /> },
  { name: "Platinum Sponsor", price: "₹3,00,000+", icon: <Gem className="w-8 h-8 text-blue-400" /> },
  { name: "Gold Sponsor", price: "₹1,50,000+", icon: <Medal className="w-8 h-8 text-amber-400" /> },
  { name: "Silver Sponsor", price: "₹75,000+", icon: <Medal className="w-8 h-8 text-gray-400" /> },
  { name: "Community / Startup Partner", price: "₹25,000 – ₹50,000", icon: <Handshake className="w-8 h-8 text-green-500" /> },
];

export default function SponsorshipSlabs() {
  return (
    <PageWrapper>
      <div className="px-4 sm:px-8 lg:px-16 py-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 tracking-tight text-neutral-900 dark:text-neutral-100">
        Sponsorship Slabs
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {slabs.map((slab, idx) => (
          <div
            key={idx}
            className={`rounded-2xl p-6 sm:p-8 text-center border transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1 ${
              slab.highlight
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
          </div>
        ))}
      </div>
      <SponsorForm />
    </div>
    </PageWrapper>
  );
}
