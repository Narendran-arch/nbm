"use client";

import { useState } from "react";
import ServiceCard from "@/components/ui/ServiceCard";
import Link from "next/link";
import { therapies } from "@/data/outTherapies";

export default function TherapiesOffered() {
  const [query, setQuery] = useState("");

  const isSearching = query.trim().length > 0;

  // FIX 1: Cleaned up logic and changed parameter to "therapy" to avoid shadowing
  const visibleTherapies = isSearching
    ? therapies.filter((therapy) => {
        const search = query.toLowerCase();
        return (
          therapy.title?.toLowerCase().includes(search) ||
          therapy.goal?.toLowerCase().includes(search) ||
          therapy.tags?.some((tag) => tag.toLowerCase().includes(search))
        );
      })
    : therapies.slice(0, 4);

  return (
    <section
      className="pt-[4rem] bg-[#F5F7FA] min-h-screen"
      id="therapiesoffered"
    >
      {/* Header */}
      <div className=" flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-[1.5rem] sm:text-[1.75rem] md:text-[2rem] lg:text-[2.25rem] xl:text-[2rem] 2k:text-[2.5rem] font-bold my-[2rem]  text-[#014579]">
          Therapies Offered
        </h1>
        <h2 className="text-[#757575] mt-2 w-full md:w-1/2 text-sm md:text-base">
          Comprehensive care tailored to your needs delivered by experienced
          professionals using evidence based treatments
        </h2>
      </div>

      {/* Search */}
      <div className="my-12  flex flex-col mx-[10vw]  gap-4 px-4">
        <div className="flex w-full items-center justify-between">
          <div className="flex flex-col md:flex-row items-center md:items-end justify-end w-full gap-12">
            {/* --- SEARCH BAR --- */}
            <div className="relative w-full md:w-1/2 max-w-[48rem]">
              {/* Search Icon */}
              <svg
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-800 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>

              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder='"Search by pain or treatment or therapies"'
                className="
                  w-full 
                  pl-12 pr-4 py-3.5 
                  bg-white 
                  rounded-lg 
                  border border-gray-100 
                  shadow-[0px_2px_8px_0px_rgba(0,0,0,0.06)] 
                  outline-none 
                  text-gray-800 
                  placeholder:text-gray-500
                "
              />
            </div>

            {/* --- VIEW ALL SERVICES BUTTON --- */}
            <Link
              href="/ourservice/ourtherapies"
              className="ms-0 md:ms-[5%] flex items-center justify-center gap-3 px-6 py-3 rounded-lg border border-[#093A70] text-[#093A70] font-medium hover:bg-[#093A70] hover:text-white transition-colors duration-300 whitespace-nowrap shrink-0"
            >
              View all Therapies

              {/* Right Arrow Icon */}
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* MOBILE – STACKED */}
      <div className="flex flex-col items-center md:hidden mt-12 md:px-4 space-y-6">
        {visibleTherapies.map((therapy) => (
          <ServiceCard key={therapy.id} service={therapy} />
        ))}
      </div>

      {/* WEB – CAROUSEL */}
      <div className="hidden md:block mt-16 mx-30">
        <div className="flex gap-8 overflow-x-auto pb-4 snap-x snap-mandatory">
          {visibleTherapies.map((therapy) => (
            <div key={therapy.id} className="snap-start shrink-0 ">
              <ServiceCard service={therapy} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}