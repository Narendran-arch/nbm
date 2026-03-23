"use client";

import { useState, useEffect } from "react";
import ServiceCard from "@/components/ui/ServiceCard";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { therapies } from "@/data/outTherapies";

export default function Ourtherapies() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialPage = Number(searchParams.get("page")) || 1;
  const initialQuery = searchParams.get("q") || "";

  const [query, setQuery] = useState(initialQuery);
  const [currentPage, setCurrentPage] = useState(initialPage);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  const ITEMS_PER_PAGE = isMobile ? 4 : 12;

  // FIX 1: Changed parameter name from "therapies" to "therapy"
  const filteredTherapies = therapies.filter((therapy) => {
    if (!query) return true;

    const search = query.toLowerCase();
    return (
      therapy.title?.toLowerCase().includes(search) ||
      therapy.goal?.toLowerCase().includes(search) ||
      therapy.tags?.some((tag) => tag.toLowerCase().includes(search))
    );
  });

  const totalPages = Math.ceil(filteredTherapies.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedTherapies = filteredTherapies.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE,
  );

  useEffect(() => {
    const params = new URLSearchParams();

    if (query) params.set("q", query);
    if (currentPage > 1) params.set("page", currentPage);

    router.replace(`?${params.toString()}`, { scroll: false });
  }, [query, currentPage, router]);

  // Reset page when search changes
  useEffect(() => {
    const totalPages = Math.ceil(filteredTherapies.length / ITEMS_PER_PAGE);

    if (currentPage > totalPages) {
      setCurrentPage(1);
    }
  }, [filteredTherapies.length, currentPage]);

  const getPagination = (current, total) => {
    const pages = [];

    if (total <= 7) {
      return Array.from({ length: total }, (_, i) => i + 1);
    }

    pages.push(1);

    if (current > 3) pages.push("...");

    for (
      let i = Math.max(2, current - 1);
      i <= Math.min(total - 1, current + 1);
      i++
    ) {
      pages.push(i);
    }

    if (current < total - 2) pages.push("...");

    pages.push(total);

    return pages;
  };

  return (
    <Suspense fallback={null}>
      <section className="pt-[8rem] pb-20 bg-[#F5F7FA] min-h-screen">
        {/* Header */}
        <div className="text-center px-4">
          <h1 className="text-[2rem] font-bold text-[#014579]">
            Our therapies
          </h1>
          <p className="text-[#757575] mt-2">
            Explore all our treatment and recovery therapies
          </p>
        </div>

        {/* Search */}
        {/* FIX 2: Updated Search bar to match Figma specs with Icon */}
        <div className="mt-10 flex justify-center px-4">
          <div className="relative w-full max-w-3xl">
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
        </div>

        {/* Cards */}
        <div className="mt-16 px-6 max-w-7xl mx-auto">
          <div
            className="
              grid gap-10
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
              xl:grid-cols-4
            "
          >
            {paginatedTherapies.length > 0 ? (
              // FIX 1 cont.: Changed parameter name from "therapies" to "therapy"
              paginatedTherapies.map((therapy) => (
                <ServiceCard key={therapy.slug} service={therapy} />
              ))
            ) : (
              <p className="col-span-full text-center text-[#757575]">
                No therapies found
              </p>
            )}
          </div>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-20 flex justify-center items-center gap-3 flex-wrap">
            {/* Prev */}
            <button
              onClick={() => setCurrentPage((p) => p - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 border rounded disabled:opacity-40 transition-colors hover:bg-gray-50"
            >
              Prev
            </button>

            {/* Numbers with dots */}
            {getPagination(currentPage, totalPages).map((item, i) =>
              item === "..." ? (
                <span key={`dots-${i}`} className="px-3 py-2 text-[#757575]">
                  …
                </span>
              ) : (
                <button
                  key={item}
                  onClick={() => setCurrentPage(item)}
                  className={`px-4 py-2 rounded border transition-colors ${
                    currentPage === item
                      ? "bg-[#014579] text-white border-[#014579]"
                      : "hover:bg-gray-50"
                  }`}
                >
                  {item}
                </button>
              ),
            )}

            {/* Next */}
            <button
              onClick={() => setCurrentPage((p) => p + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 border rounded disabled:opacity-40 transition-colors hover:bg-gray-50"
            >
              Next
            </button>
          </div>
        )}
      </section>
    </Suspense>
  );
}