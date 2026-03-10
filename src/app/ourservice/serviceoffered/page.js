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

const services = [
  {
    slug: "Musculoskeletal-Physiotherapy",
    title: "Musculoskeletal Physiotherapy",
    goal: "Improve strength & mobility",
    category: "Pain Relief",
    tags: ["back pain", "spine injury", "posture"],
    image: "/ourservicehero.png",
    description:
      "Musculoskeletal physiotherapy focuses on treating pain and movement problems involving muscles, joints, ligaments, and bones. It helps restore mobility, reduce discomfort, and improve overall physical function.",
  },
  {
    slug: "Workplace-Ergonomics",
    title: "Workplace Ergonomics",
    goal: "prevent injuries & improve comfort",
    category: "posture",
    tags: ["Ergonomics", "muscle tear", "Workplace"],
    image: "/ourservicehero.png",
    description:
      "Workplace ergonomics focuses on evaluating work setups and training individuals to maintain proper posture and movement. It helps reduce work-related pain, prevent injuries, and improve comfort and productivity.",
  },
  {
    slug: "Vestibular-Rehabilitation-(VR)",
    title: "Vestibular Rehabilitation (VR)",
    goal: "Restore vestibular function",
    category: "Mobility",
    tags: ["manual therapy", "joint pain", "stiffness"],
    image: "/ourservicehero.png",
    description:
      "Vestibular rehabilitation focuses on treating dizziness, vertigo, and balance disorders through targeted exercises. It helps improve stability, coordination, and confidence in daily movement.",
  },
  {
    slug: "Womens-Health-Physiotherapy",
    title: "Women’s Health Physiotherapy",
    goal: "Core and pelvic strength",
    category: "Pain Relief",
    tags: ["strength", "Core", "work posture"],
    image: "/ourservicehero.png",
    description:
      "Women’s health physiotherapy addresses conditions related to pregnancy, postnatal recovery, pelvic floor dysfunction, and hormonal changes. It helps improve strength, reduce pain, and enhance overall well-being.",
  },
  {
    slug: "post-surgery-rehabilitation",
    title: "Post Surgery Rehabilitation",
    goal: "Speed up recovery",
    category: "Rehabilitation",
    tags: ["post surgery", "recovery", "mobility"],
    image: "/ourservicehero.png",
    description:
      "Structured rehab programs designed to restore strength, movement, and confidence after surgery.",
  },
  {
    slug: "Pediatric-Physiotherapy",
    title: "Pediatric Physiotherapy",
    goal: "Functional movement development",
    category: "Neuro Care",
    tags: ["stroke rehab", "neurological", "balance"],
    image: "/ourservicehero.png",
    description:
      "Pediatric physiotherapy focuses on improving movement, strength, and coordination in infants and children. It supports healthy physical development and helps children achieve age-appropriate milestones.",
  },
  {
    slug: "Neuro-Physiotherapy",
    title: "Neuro Physiotherapy",
    goal: "Restored movement control",
    category: "Neuro",
    tags: ["Restored", "Neuro", "control"],
    image: "/ourservicehero.png",
    description:
      "Neuro physiotherapy focuses on improving movement, balance, and coordination in patients with neurological conditions. It helps retrain the nervous system to restore function and independence.",
  },
  {
    slug: "Functional-Training",
    title: "Functional Training",
    goal: "Improve functional fitness",
    category: "Training",
    tags: ["Training", "development", "mobility"],
    image: "/ourservicehero.png",
    description:
      "Functional training focuses on exercises that improve strength, balance, and coordination for everyday movements. It helps enhance mobility, prevent injuries, and support efficient, pain-free daily activities.",
  },
  {
    slug: "Spine-Rehabilitation",
    title: "Spine Rehabilitation",
    goal: "Improve strength & mobility",
    category: "Spine",
    tags: ["elder care", "Spine", "Rehabilitation"],
    image: "/ourservicehero.png",
    description:
      "Spine rehabilitation focuses on relieving pain, restoring mobility & strengthening spinal muscles. It combines targeted exercises to improve posture, function,  long-term spine health.",
  },
  {
    slug: "Sports-Physiotherapy",
    title: "Sports Physiotherapy",
    goal: "Prevent & treat injuries",
    category: "Sports",
    tags: ["Sports", "desk job", "injuries"],
    image: "/ourservicehero.png",
    description:
      "Sports physiotherapy focuses on preventing, treating, and rehabilitating sports-related injuries. It helps athletes recover faster, improve performance, and safely return to activity.",
  },
  {
    slug: "Post-Surgical-Rehabilitation",
    title: "Post-Surgical Rehabilitation",
    goal: "Fast post- surgical recovery",
    category: "Pain Management",
    tags: ["Post", "Surgical", "Rehabilitation"],
    image: "/ourservicehero.png",
    description:
      "Post-surgical rehabilitation helps restore strength, mobility, and function after surgery. It supports safe healing, reduces pain and stiffness, and speeds up return to daily activities.",
  },
  {
    slug: "balance-gait-training",
    title: "Balance & Gait Training",
    goal: "Improve walking stability",
    category: "Mobility",
    tags: ["balance", "walking", "coordination"],
    image: "/ourservicehero.png",
    description:
      "Programs designed to improve balance, coordination, and walking confidence.",
  },
  {
    slug: "Geriatric-Physiotherapy",
    title: "Geriatric Physiotherapy",
    goal: "Improve quality of movements",
    category: "Wellness",
    tags: ["Geriatric", "office pain", "work health"],
    image: "/ourservicehero.png",
    description:
      "Geriatric physiotherapy focuses on improving mobility, balance, and strength in older adults. It helps reduce pain, prevent falls, and maintain independence in daily activities.",
  },
  {
    slug: "Back-Spine-Rehabilitation",
    title: "Back & Spine Rehabilitation",
    goal: " Regain full functionality",
    category: "Cardio Care",
    tags: ["breathing", "cardio rehab", "endurance"],
    image: "/ourservicehero.png",
    description:
      "Restore strength and function to your muscles and joints.​ Our targeted exercises relieve pain and improve mobility.​ The goal is to help you return to daily activities with better mobility",
  },
  {
    slug: "women-health-physio",
    title: "Women’s Health Physiotherapy",
    goal: "Restore pelvic strength",
    category: "Women Care",
    tags: ["women health", "pelvic floor", "postnatal"],
    image: "/ourservicehero.png",
    description:
      "Specialized therapy addressing pelvic health, pregnancy, and postnatal recovery.",
  },
  {
    slug: "prenatal-postnatal-care",
    title: "Prenatal & Postnatal Care",
    goal: "Support motherhood journey",
    category: "Women Care",
    tags: ["pregnancy", "postnatal", "mobility"],
    image: "/ourservicehero.png",
    description:
      "Gentle physiotherapy to support mothers before and after childbirth.",
  },
  {
    slug: "muscle-strengthening",
    title: "Muscle Strengthening Therapy",
    goal: "Build muscle strength",
    category: "Strength",
    tags: ["muscle strength", "conditioning", "fitness"],
    image: "/ourservicehero.png",
    description:
      "Progressive strengthening exercises to improve muscle power and endurance.",
  },
  {
    slug: "pain-relief-therapy",
    title: "Pain Relief Therapy",
    goal: "Achieve lasting relief",
    category: "Pain Relief",
    tags: ["pain relief", "therapy", "comfort"],
    image: "/ourservicehero.png",
    description:
      "Non-invasive treatments focused on reducing pain and improving comfort.",
  },
  {
    slug: "injury-prevention",
    title: "Injury Prevention Programs",
    goal: "Avoid future injuries",
    category: "Prevention",
    tags: ["injury prevention", "sports safety", "training"],
    image: "/ourservicehero.png",
    description:
      "Preventive programs to strengthen weak areas and reduce injury risks.",
  },
  {
    slug: "home-visit-physiotherapy",
    title: "Home Visit Physiotherapy",
    goal: "Recover at home",
    category: "Home Care",
    tags: ["home physiotherapy", "convenience", "care"],
    image: "/ourservicehero.png",
    description:
      "Professional physiotherapy services delivered at the comfort of your home.",
  },
];


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

        {/* Filter Chips */}
        <div className="flex flex-wrap gap-3 justify-center">
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
        {visibleServices.map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}

        {!isSearching && (
          <Link
            href="/ourservice"
            className="block text-center py-4 rounded-xl border border-[#E0E0E0]"
          >
            See all services →
          </Link>
        )}
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

          {!isSearching && (
            <Link
              href="/ourservice"
              className="snap-start shrink-0 w-[360px] flex items-center justify-center rounded-xl border border-dashed"
            >
              See all services →
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
