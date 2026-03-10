"use client";

import { useState } from "react";
import SymptomCard from "../ui/Symptomcard";
import TreatmentPlanModal from "../ui/TreatmentPlanModal";
import { Mousewheel } from "swiper/modules";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function FindbySymptom() {
  const [activeModal, setActiveModal] = useState(null);

  const cards = [
    {
      id: 1,
      icon: "/info-orange-circle.svg",
      title: "Neck Pain",
      subtitle: "explore treatment",
      modal: {
        title: "Neck Pain Treatment Plan",
        subtitle: "Targeted therapy for cervical strain & posture issues",
        steps: [
          "Cervical mobility and stretching exercises",
          "Manual therapy for muscle tightness",
          "Postural correction training",
          "Isometric neck strengthening",
          "Ergonomic workstation guidance",
        ],
        nextStep:
          "This plan serves as a general guideline. For accurate diagnosis and personalized care, consult our certified physiotherapist.",
      },
    },
    {
      id: 2,
      icon: "/Lightning.svg",
      title: "Lower Back Pain",
      subtitle: "explore treatment",
      modal: {
        title: "Lower Back Pain Treatment Plan",
        subtitle: "Focused rehabilitation for lumbar discomfort",
        steps: [
          "Core stabilization exercises",
          "Lumbar spine mobilization",
          "Hamstring & hip flexor stretching",
          "Posture re-education",
          "Heat therapy for muscle relaxation",
        ],
        nextStep:
          "Back pain varies in cause and severity. A detailed assessment ensures safe and effective recovery.",
      },
    },
    {
      id: 3,
      icon: "/heartBeat.svg",
      title: "Shoulder Pain",
      subtitle: "explore treatment",
      modal: {
        title: "Shoulder Rehabilitation Plan",
        subtitle: "Recovery plan for rotator cuff & impingement issues",
        steps: [
          "Rotator cuff strengthening",
          "Scapular stabilization exercises",
          "Range-of-motion therapy",
          "Manual release techniques",
          "Resistance band strengthening",
        ],
        nextStep:
          "Shoulder conditions require tailored exercise progression. Book a session for guided therapy.",
      },
    },
    {
      id: 4,
      icon: "/Lightning.svg",
      title: "Knee Pain",
      subtitle: "explore treatment",
      modal: {
        title: "Knee Pain Treatment Plan",
        subtitle: "Strength-based recovery for knee joint stability",
        steps: [
          "Quadriceps and hamstring strengthening",
          "Patellar mobilization",
          "Balance and proprioception training",
          "Low-impact functional exercises",
          "Activity modification guidance",
        ],
        nextStep:
          "Knee pain recovery depends on alignment and strength balance. Professional supervision is recommended.",
      },
    },
    {
      id: 5,
      icon: "/heartBeat.svg",
      title: "Ankle Sprain",
      subtitle: "explore treatment",
      modal: {
        title: "Ankle Sprain Rehabilitation Plan",
        subtitle: "Structured healing for ligament recovery",
        steps: [
          "Controlled ankle mobility exercises",
          "Proprioception & balance drills",
          "Resistance band strengthening",
          "Swelling control techniques",
          "Gradual return-to-sport progression",
        ],
        nextStep:
          "Improper rehab can lead to recurring sprains. Get a personalized plan for complete recovery.",
      },
    },
    {
      id: 6,
      icon: "/Lightning.svg",
      title: "Sciatica",
      subtitle: "explore treatment",
      modal: {
        title: "Sciatica Pain Management Plan",
        subtitle: "Relief plan for nerve compression symptoms",
        steps: [
          "Nerve gliding exercises",
          "Piriformis stretching",
          "Core strengthening",
          "Postural correction training",
          "Spinal decompression techniques",
        ],
        nextStep:
          "Sciatica symptoms differ based on nerve involvement. Consult our specialist for safe treatment progression.",
      },
    },
  ];

  return (
    <section className="bg-[#F5F7FA]" id="findbysymptompage">
      {/* HERO */}
      <div className="bg-hero-gradient py-[8%] flex flex-col items-center justify-center">
        <h1 className="text-[2rem] md:text-[3rem] text-white text-center font-bold mb-2">
          Start Your Healing Journey
        </h1>
        <p className="text-[1.125rem] text-white text-center max-w-[720px]">
          Select your condition or symptom to see our specialized,
          evidence-based treatments
        </p>
      </div>

      {/* CONTENT */}
      <div className="mt-[5.5rem]">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-[1.5rem] sm:text-[1.75rem] md:text-[2rem] lg:text-[2.25rem] xl:text-[2rem] 2k:text-[2.5rem] font-bold my-[2rem]  text-[#014579]">
            Find by Symptom
          </h1>
          <h2 className="text-[#757575] text-[1.125rem]">
            Select the symptom you are experiencing
          </h2>
        </div>

        {/* ---------------- MOBILE GRID ---------------- */}
        <div className="md:hidden px-4 mt-8 pb-20">
          <div className="grid grid-cols-2 gap-4">
            {cards.map((card) => (
              <div key={card.id} onClick={() => setActiveModal(card.modal)}>
                <SymptomCard {...card} />
              </div>
            ))}
          </div>
        </div>

        {/* ---------------- DESKTOP CAROUSEL ---------------- */}
        <div className="hidden md:block mt-10 pb-[10rem]">
          <Swiper
            modules={[Mousewheel]}
            spaceBetween={24}
            slidesPerView="auto"
            grabCursor
            mousewheel={{ forceToAxis: true }}
            className="!px-8 lg:!px-[7.5rem] py-10 !pr-32"
          >
            {cards.map((card) => (
              <SwiperSlide key={card.id} className="!w-[280px] lg:!w-[320px]">
                <div onClick={() => setActiveModal(card.modal)}>
                  <SymptomCard {...card} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <TreatmentPlanModal
        data={activeModal}
        onClose={() => setActiveModal(null)}
      />
    </section>
  );
}
