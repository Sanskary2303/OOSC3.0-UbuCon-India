import PageWrapper from "@/components/layout/PageWrapper";
import React from "react";
import SponsorForm from "@/components/SponsorForm/spf";

type Slab = {
  name: string;
  logo: string;
};

// Example slabs grouped by category
const titleSlabs: Slab[] = [
  {
    name: "QUALCOMM",
    logo: "/img/logos/qualcomm.png",
  },
];

const goldSlabs: Slab[] = [
  {
    name: "NimbleEdge",
    logo: "/img/logos/nimble.jpeg",
  },
  {
    name: "DeepComputing",
    logo: "/img/logos/deepComp.png",
  },
];

const silverSlabs: Slab[] = [
  {
    name: "GODSPEED",
    logo: "/img/logos/godsspeed.jpeg.jpg",
  },
];

export default function SponsorshipSlabs() {
  return (
    <PageWrapper>
      <div className="px-4 sm:px-8 lg:px-16 py-16 space-y-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 tracking-tight text-neutral-900 dark:text-neutral-100">
          {/* Sponsorship Slabs */}
        </h2>

        {/* Title Sponsor Section */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8">Title Sponsor</h3>
          <div className="flex justify-center">
            {titleSlabs.map((slab, idx) => (
              <div
                key={idx}
                className="rounded-2xl p-6 text-center border shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex justify-center mb-4">
                  <img
                    src={slab.logo}
                    alt={slab.name}
                    className="w-40 h-40 object-contain"
                  />
                </div>
                <p className="font-semibold text-lg">{slab.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Gold Sponsors Section */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8">Gold Sponsor</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-center">
            {goldSlabs.map((slab, idx) => (
              <div
                key={idx}
                className="rounded-2xl p-6 text-center border shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex justify-center mb-4">
                  <img
                    src={slab.logo}
                    alt={slab.name}
                    className="w-28 h-28 object-contain"
                  />
                </div>
                <p className="font-semibold text-lg">{slab.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Silver Sponsors Section */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8">Silver Sponsor</h3>
          <div className="flex justify-center">
            {silverSlabs.map((slab, idx) => (
              <div
                key={idx}
                className="rounded-2xl p-6 text-center border shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex justify-center mb-4">
                  <img
                    src={slab.logo}
                    alt={slab.name}
                    className="w-24 h-24 object-contain"
                  />
                </div>
                <p className="font-semibold text-lg">{slab.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Sponsor Form */}
        <SponsorForm />
      </div>
    </PageWrapper>
  );
}
