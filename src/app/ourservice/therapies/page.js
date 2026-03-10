"use client";

import { useState } from "react";
import ServiceCard from "@/components/ui/ServiceCard";
import Link from "next/link";

const quickFilters = [
  "Back pain",
  "Spine injury",
  "Sports recovery",
  "Muscle stiffness",
];

const therapies = [
  {
    slug: "manual-therapy",
    title: "Manual Therapy",
    goal: "Regain full functionality",
    category: "Pain Relief",
    tags: ["joint pain", "stiffness", "mobility"],
    image: "/ourservicehero.png",
    description:
      "Manual therapy involves hands-on techniques to relieve pain, improve joint mobility, and restore muscle function. It helps reduce stiffness and enhances movement efficiency.",
  },
  {
    slug: "interferential-therapy",
    title: "Interferential Therapy (IFT)",
    goal: "Return to peak performance",
    category: "Pain Relief",
    tags: ["pain relief", "nerve stimulation", "recovery"],
    image: "/ourservicehero.png",
    description:
      "IFT uses low-frequency electrical currents to relieve pain, reduce inflammation, and stimulate healing. It is effective for deep tissue recovery and chronic pain conditions.",
  },
  {
    slug: "ultrasound-therapy",
    title: "Ultrasound Therapy",
    goal: "Regain full functionality",
    category: "Pain Relief",
    tags: ["tissue healing", "inflammation", "rehab"],
    image: "/ourservicehero.png",
    description:
      "Ultrasound therapy uses sound waves to promote tissue healing, reduce inflammation, and improve blood circulation. It supports faster recovery and pain reduction.",
  },
  {
    slug: "electrotherapy",
    title: "Electrotherapy",
    goal: "Stimulate muscle recovery",
    category: "Rehabilitation",
    tags: ["muscle stimulation", "recovery", "strength"],
    image: "/ourservicehero.png",
    description:
      "Electrotherapy uses electrical stimulation to activate muscles, reduce pain, and improve strength. It aids in rehabilitation and post-injury recovery.",
  },
  {
    slug: "dry-needling",
    title: "Dry Needling",
    goal: "Release muscle tension",
    category: "Pain Management",
    tags: ["trigger points", "muscle tension", "pain relief"],
    image: "/ourservicehero.png",
    description:
      "Dry needling targets trigger points to relieve muscle tightness and reduce pain. It improves flexibility and enhances overall muscle performance.",
  },
  {
    slug: "kinesio-taping",
    title: "Kinesio Taping",
    goal: "Support injured muscles",
    category: "Support Therapy",
    tags: ["muscle support", "sports injury", "rehab"],
    image: "/ourservicehero.png",
    description:
      "Kinesio taping provides support to muscles and joints without restricting movement. It reduces swelling, improves circulation, and enhances recovery.",
  },
];

export default function TherapiesOffered() {
  const [query, setQuery] = useState("");

  const isSearching = query.trim().length > 0;

  const filteredtherapies = therapies.filter((therapies) => {
    if (!isSearching) return true;

    const search = query.toLowerCase();
    return (
      therapies.title.toLowerCase().includes(search) ||
      therapies.goal.toLowerCase().includes(search) ||
      therapies.tags.some((tag) => tag.toLowerCase().includes(search))
    );
  });

  const visibleTherapies = isSearching
    ? filteredtherapies
    : therapies.slice(0, 4);

  return (
    <section
      className="pt-[4rem] bg-[#F5F7FA] min-h-screen"
      id="therapiesoffered"
    >
      {/* Header */}
      <div className="text-center px-4">
        <h1 className="text-[1.5rem] sm:text-[1.75rem] md:text-[2rem] lg:text-[2.25rem] xl:text-[2rem] 2k:text-[2.5rem] font-bold my-[2rem]  text-[#014579]">
          Therapies Offered
        </h1>
        <h2 className="text-[#757575] mt-2 text-sm md:text-base">
          Comprehensive care tailored to your needs delivered by experienced
          professionals using evidence based treatments
        </h2>
      </div>

      {/* Search */}
      <div className="my-12 flex flex-col mx-[10vw] items-center gap-4 px-4">
        <div className="flex w-full items-center justify-between">
          <div className="w-full max-w-3xl">
            {" "}
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by pain or treatment or therapies"
              className="flex-1 px-4 py-3 w-full max-w-3xl  rounded-xl border border-[#E0E0E0] outline-none"
            />
          </div>

          <div className="">
            <Link
              href="/ourservice/ourtherapies"
              className="hidden md:flex  items-center px-6 py-3 rounded-xl border border-[#E0E0E0] text-sm"
            >
              View all therapies
            </Link>
          </div>
        </div>

        {/* Filter Chips */}
        <div className="flex mt-10 flex-wrap gap-3 justify-center">
          {quickFilters.map((item) => (
            <button
              key={item}
              onClick={() => setQuery(item)}
              className="bg-[#F3F9FD] px-4 py-2 rounded-full text-sm shadow-[0px_0.5px_4px_0px_rgba(0,0,0,0.25)]"
            >
              {item}
            </button>
          ))}

          {isSearching && (
            <button
              onClick={() => setQuery("")}
              className="text-sm text-red-500"
            >
              ✕ Clear
            </button>
          )}
        </div>
      </div>

      {/* MOBILE – STACKED */}
      <div className="flex flex-col items-center md:hidden mt-12 md:px-4 space-y-6">
        {visibleTherapies.map((therapies) => (
          <ServiceCard key={therapies.slug} service={therapies} />
        ))}

        {!isSearching && (
          <Link
            href="/ourservice/therapies"
            className="block text-center py-4 rounded-xl border border-[#E0E0E0]"
          >
            See all therapies →
          </Link>
        )}
      </div>

      {/* WEB – CAROUSEL */}
      <div className="hidden md:block mt-16 mx-30">
        <div className="flex gap-8 overflow-x-auto pb-4 snap-x snap-mandatory">
          {visibleTherapies.map((therapies) => (
            <div key={therapies.slug} className="snap-start shrink-0 ">
              <ServiceCard service={therapies} />
            </div>
          ))}

          {!isSearching && (
            <Link
              href="/ourservice/ourtherapies"
              className="snap-start shrink-0 w-[360px] flex items-center justify-center rounded-xl border border-dashed"
            >
              See all therapies →
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
