"use client";
import { Suspense } from "react";
import { useState, useEffect } from "react";
import ServiceCard from "@/components/ui/ServiceCard";
import { useRouter, useSearchParams } from "next/navigation";
import { services } from "@/data/ourService";

export default function OurServicesPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialPage = Number(searchParams.get("page")) || 1;
  const initialQuery = searchParams.get("q") || "";

  const [query, setQuery] = useState(initialQuery);
  const [currentPage, setCurrentPage] = useState(initialPage);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  const ITEMS_PER_PAGE = isMobile ? 4 : 12;

  const filteredServices = services.filter((service) => {
    if (!query) return true;

    const search = query.toLowerCase();
    return (
      service.title.toLowerCase().includes(search) ||
      service.goal.toLowerCase().includes(search) ||
      service.tags.some((tag) => tag.toLowerCase().includes(search))
    );
  });

  const totalPages = Math.ceil(filteredServices.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedServices = filteredServices.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE,
  );
  useEffect(() => {
    const params = new URLSearchParams();

    if (query) params.set("q", query);
    if (currentPage > 1) params.set("page", currentPage);

    router.replace(`?${params.toString()}`, { scroll: false });
  }, [query, currentPage]);

  // Reset page when search changes
  useEffect(() => {
    const totalPages = Math.ceil(filteredServices.length / ITEMS_PER_PAGE);

    if (currentPage > totalPages) {
      setCurrentPage(1);
    }
  }, [filteredServices.length]);

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
      <section className="pt-[8rem] bg-[#F5F7FA] min-h-screen">
        {/* Header */}
        <div className="text-center px-4">
          <h1 className="text-[2rem] font-bold text-[#014579]">Our Services</h1>
          <p className="text-[#757575] mt-2">
            Explore all our treatment and recovery services
          </p>
        </div>

        {/* Search */}
        <div className="mt-10 flex justify-center px-4">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by pain, treatment or therapy"
            className="w-full max-w-3xl px-4 py-3 rounded-xl border border-[#E0E0E0]"
          />
        </div>

        {/* Cards */}
        <div className="mt-16 px-6">
          <div
            className="
          grid gap-10
          grid-cols-1
          md:grid-cols-4
        "
          >
            {paginatedServices.length > 0 ? (
              paginatedServices.map((service) => (
                <ServiceCard key={service.slug} service={service} />
              ))
            ) : (
              <p className="col-span-full text-center text-[#757575]">
                No services found
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
              className="px-4 py-2 border rounded disabled:opacity-40"
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
                  className={`px-4 py-2 rounded border ${
                    currentPage === item ? "bg-[#014579] text-white" : ""
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
              className="px-4 py-2 border rounded disabled:opacity-40"
            >
              Next
            </button>
          </div>
        )}
      </section>
    </Suspense>
  );
}
