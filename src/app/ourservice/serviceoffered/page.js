"use client";

import { useState } from "react";
import ServiceCard from "@/components/ui/ServiceCard";
import Link from "next/link";
import { services } from "@/data/ourService";

export default function ServiceOffered() {
  const [query, setQuery] = useState("");

  const isSearching = query.trim().length > 0;

  const filteredServices = services.filter((service) => {
    if (!isSearching) return true;

    const search = query.toLowerCase();
    return (
      service.title.toLowerCase().includes(search) ||
      service.goal.toLowerCase().includes(search) ||
      service.tags.some((tag) => tag.toLowerCase().includes(search))
    );
  });

  const visibleServices = isSearching
    ? filteredServices
    : services.slice(0, 4);

  return (
    <section className="pt-[8rem] bg-[#F5F7FA] min-h-screen">
      {/* Header */}
      <div className="text-center px-4">
        <h1 className="text-[2rem] font-bold text-[#014579]">
          Services Offered
        </h1>
        <p className="text-[#757575] mt-2 text-sm md:text-base">
          Comprehensive care tailored to your needs delivered by experienced
          professionals using evidence based treatments
        </p>
      </div>

      {/* Search */}
      <div className="mt-12 flex flex-col items-center gap-4 px-4">
        <div className="flex w-full max-w-3xl gap-3">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by pain or treatment or therapies"
            className="flex-1 px-4 py-3 rounded-xl border border-[#E0E0E0] outline-none"
          />

          <Link
            href="/ourservice"
            className="hidden md:flex items-center px-6 py-3 rounded-xl border border-[#E0E0E0] text-sm"
          >
            View all services
          </Link>
        </div>
      </div>

      {/* MOBILE – STACKED */}
      <div className="flex flex-col items-center md:hidden mt-12 md:px-4 space-y-6">
        {visibleServices.map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}

      </div>

      {/* WEB – CAROUSEL */}
      <div className="hidden md:block mt-16 mx-30">
        <div className="flex gap-8 overflow-x-auto pb-4 snap-x snap-mandatory">
          {visibleServices.map((service) => (
            <div
              key={service.slug}
              className="snap-start shrink-0 "
            >
              <ServiceCard service={service} />
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
