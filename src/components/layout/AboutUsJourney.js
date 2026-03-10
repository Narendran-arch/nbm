"use client";

import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400","500","600","700"],
});
/**
 * Reusable Journey Card Component
 */
function JourneyCard({
  year,
  title,
  subtitle,
  description,
  badge,
  iconSrc,
  iconAlt,
}) {
  return (
    <article
      className="relative bg-white rounded-2xl shadow-md p-8 w-full 
                 transition-all duration-300 hover:shadow-xl"
      aria-label={`${year} - ${title}`}
    >
      {/* Top Icon Circle */}
      <div className="absolute -top-6 left-8">
        <div className=" flex items-center justify-center ">
          <Image
            src={iconSrc}
            alt={iconAlt}
            width={50}
            height={50}
            className="object-contain"
          />
        </div>
      </div>

      {/* Badge */}
      {badge && (
        <div className="absolute -top-4 right-6">
          <span className="bg-[#F28C28] text-white text-xs font-semibold px-4 py-1 rounded-full">
            {badge}
          </span>
        </div>
      )}

      {/* Content */}
      <div className="mt-6 space-y-4">
        <div>
          <h3 className="text-3xl font-bold text-[#0C3C60]">
            {year}{" "}
            {subtitle && (
              <span className="text-sm font-medium text-gray-500 ml-2">
                {subtitle}
              </span>
            )}
          </h3>
          <p className="text-[#0C3C60] font-semibold mt-1">{title}</p>
        </div>

        <p className="text-[#000000] text-[16px] leading-relaxed">
          {description}
        </p>

        {/* Bottom Accent Line */}
        <div className="h-1 w-full bg-green-200 rounded-full mt-6" />
      </div>
    </article>
  );
}

/**
 * Main Component
 */
export default function AboutUsJourney() {
  return (
    <section
      className="w-full"
      aria-labelledby="about-us-journey-heading"
    >
      {/* HERO SECTION */}
      <div className="relative w-full h-[420px] md:h-[480px]">
        <Image
          src="/about-us-journey.png"
          alt="Physiotherapy session helping patient regain movement"
          fill
          priority
          className="object-cover"
        />

        {/* Blue Overlay */}
        <div className="absolute inset-0 bg-[#ADD4F1DE]" />

        {/* Content */}
        <div className="relative w-full z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
          <h1
            id="about-us-journey-heading"
            className="text-[#014579] text-center md:text-start text-3xl md:text-5xl font-bold max-w-2xl leading-tight"
          >
            Restoring Movement,
            <br />
            Empowering Lives
          </h1>

          <p className="text-[#212121] font-bold mt-4 max-w-xl text-[1.25rem] text-center lg:text-start">
            Over 10 years of excellence in physiotherapy care,
            helping thousands achieve their recovery goals
          </p>

          {/* Stats */}
          <div className="flex gap-8 mt-8 flex-wrap items-center justify-center lg:justify-start">
            <div className="flex items-center flex-col">
              <h3 className={`text-[#212121] text-[2rem]  font-black ${poppins.className}`}>9+</h3>
              <p className="text-black text-xs">Years Experience</p>
            </div>
            <div className="flex items-center flex-col">
              <h3 className={`text-[#212121] text-[2rem]  font-black ${poppins.className}`}>30K+</h3>
              <p className="text-black text-xs">Patients Served</p>
            </div>
            <div>
              <h3 className={`text-[#212121] text-[2rem]  font-black ${poppins.className}`}>98%</h3>
              <p className="text-black text-xs">Success Rate</p>
            </div>
          </div>
        </div>
      </div>

      {/* JOURNEY SECTION */}
      <div className="bg-[#F5F7F9] py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-16">
            <h1 className="text-[1.5rem] sm:text-[1.75rem] md:text-[2rem] lg:text-[2.25rem] xl:text-[2rem] 2k:text-[2.5rem] font-bold my-[2rem]  text-[#014579] text-center">
              Our Journey
            </h1>
            <h2 className="text-gray-500 mt-4 text-sm md:text-base">
              From humble beginning to a trusted name in physiotherapy care
            </h2>
          </div>

          {/* Cards Grid */}
          <div
            className="
              grid 
              grid-cols-1 
              md:grid-cols-2 
              lg:grid-cols-4 
              gap-10
            "
          >
            <JourneyCard
              year="2016"
              subtitle="1 Clinic"
              title="Founded"
              description="Started with a vision to provide exceptional physiotherapy care to our community"
              badge="Starting Point"
              iconSrc="/icon/calendar.svg"
              iconAlt="Calendar icon"
            />

            <JourneyCard
              year="2023"
              subtitle="50K+ Patients"
              title="Recognition"
              description="Earned recognition for delivering consistent and effective patient outcomes"
              badge="Excellence"
              iconSrc="/icon/award.svg"
              iconAlt="Award icon"
            />

            <JourneyCard
              year="2025"
              subtitle="4 Clinics"
              title="Expansion"
              description="Opened new branches and expanded our team of highly skilled specialists"
              badge="+100%"
              iconSrc="/icon/trending.svg"
              iconAlt="Growth icon"
            />

            <JourneyCard
              year="2025"
              subtitle="40,000+ Lives"
              title="Excellence"
              description="Reached a milestone of serving over 30,000+ patients successfully"
              badge="+200%"
              iconSrc="/icon/users.svg"
              iconAlt="Users icon"
            />
          </div>
        </div>
      </div>
    </section>
  );
}