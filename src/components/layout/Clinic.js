"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import TeamCard from "../TeamCard";
import AboutUsJourney from "../layout/AboutUsJourney.js"

export const metadata = {
  title: "Our Dedicated Physiotherapy Team | Wellness Expert Clinic",
  description:
    "Meet our dedicated physiotherapy specialists focused on holistic wellness, pain management, and long-term recovery solutions.",
  keywords:
    "physiotherapy clinic, holistic care, pain management, physiotherapist team",
  openGraph: {
    title: "Our Dedicated Team | Wellness Expert Clinic",
    description:
      "Expert physiotherapists focused on holistic wellness and recovery.",
    url: "https://yourdomain.com/about-us/clinic",
    type: "website",
  },
};


export default function ClinicPAge() {
  const specialists = [
    {
      name: "Dr. Mageshwari",
      role: "Lead Physiotherapist",
      degree: "BPT., COMPT, PT",
      image: "/team/placeholder-men.jpg",
    },
    {
      name: "Dr. Yamuna",
      role: "Senior Physiotherapist",
      degree: "BPT., COMPT, PT",
      image:"/team/placeholder-men.jpg",
    },
    {
      name: "Dr. Swetha",
      role: "Physiotherapist",
      degree: "BPT., COMPT, PT",
      image:"/team/placeholder-men.jpg",
    },
    {
      name: "Dr. Jason",
      role: "Physiotherapist",
      degree: "BPT., COMPT, PT",
      image: "/team/placeholder-men.jpg",
    },
  ];
  return (
    <section className="w-full min-h-screen bg-[#F5F7FA] flex flex-col items-center justify-center  py-16">

      <h1 className="text-center text-[1.5rem] sm:text-[1.75rem] md:text-[2rem] lg:text-[2.25rem] xl:text-[2rem] 2k:text-[2.5rem] font-bold my-[2rem]  text-[#014579]">About Us </h1>

      {/* Main Container (909x540 at 1440) */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="
          w-full
          max-w-[909px]
          min-h-[540px]
          bg-transparent
          flex
          flex-col
          lg:flex-row
          items-center
          gap-10
        "
      >
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative w-full lg:w-[420px] aspect-[4/5] rounded-2xl overflow-hidden shadow-lg"
        >
          <Image
            src="/doctor.png" // <-- replace with your image path
            alt="Dr. K. Bala Manikandan"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex-1 space-y-6"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
            <span>🏅</span>
            <span>Clinic Founder</span>
          </div>

          {/* Name */}
          <h1 className="text-3xl md:text-4xl lg:text-[38px] font-bold text-[#0B4B7A] leading-tight">
            Dr. K. Bala Manikandan
          </h1>

          <p className="text-gray-500 font-medium tracking-wide">
            B.P.T., C.O.M.P., PT
          </p>

          {/* Quote Section */}
          <div className="relative border-l-4 border-blue-200 pl-6">
            <p className="text-gray-600 leading-relaxed text-[15px] md:text-base">
              The visionary founder of NBM Rhythm Physiotherapy, bringing over
              16 years of expert clinical experience. A dedicated professional
              in integrated wellness, he leads a team committed to restoring
              mobility and helping patients return to normalcy safely. His
              patient-centric approach combines advanced physiotherapy
              techniques with compassionate care to treat complex conditions
              effectively.
            </p>
          </div>

          {/* Bullet Points */}
          <ul className="space-y-3 text-gray-600 text-sm md:text-base">
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 mt-2 bg-green-500 rounded-full"></span>
              Founded NBM RHYTHM (Physiotherapy & Integrated Wellness Centre) in
              2015
            </li>

            <li className="flex items-start gap-3">
              <span className="w-2 h-2 mt-2 bg-green-500 rounded-full"></span>
              Pioneered manual therapy, rehab programs in the region
            </li>

            <li className="flex items-start gap-3">
              <span className="w-2 h-2 mt-2 bg-green-500 rounded-full"></span>
              Successfully transformed 30k+ lives with utmost care and
              dedication
            </li>
          </ul>
        </motion.div>
      </motion.div>
      <section className="max-w-[950px] mx-auto px-6 pt-20 text-center">
        <h1 className="text-[1.5rem] sm:text-[1.75rem] md:text-[2rem] lg:text-[2.25rem] xl:text-[2rem] 2k:text-[2.5rem] font-bold my-[2rem]  text-[#014579] text-center">
          Our Dedicated Team
        </h1>

        <p className="mt-6 text-[16px] leading-[28px] text-[#5F6C7B]">
          The Wellness Expert (Focus on Holistic Care) Focused on integrated
          wellness, our expert combines advanced physiotherapy techniques with
          holistic pain management strategies. They are committed to improving
          your overall quality of life by addressing posture, ergonomics, and
          lifestyle factors. Our physiotherapists are dedicated to restoring
          function and relieving pain, our senior physiotherapist brings
          extensive experience in manual therapy. They specialize in
          personalized recovery plans that target the root cause of injury,
          ensuring long-term health. Their compassionate approach empowers every
          patient to heal confidently.
        </p>
      </section>

      {/* Team Section */}
      <section className="max-w-[1200px] mx-auto px-6 pt-20 pb-28">
        <h1 className="text-[1.5rem] sm:text-[1.75rem] md:text-[2rem] lg:text-[2.25rem] xl:text-[2rem] 2k:text-[2.5rem] font-bold my-[2rem]  text-[#014579] text-center">
          Meet Our Specialists
        </h1>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {specialists.map((doctor, index) => (
            <TeamCard key={index} {...doctor} />
          ))}
        </div>
      </section>

      {/*our journey */}

      <section className="w-full">
        <AboutUsJourney/>
      </section>
    </section>
  );
}
