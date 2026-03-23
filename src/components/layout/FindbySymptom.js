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
      icon: "/icon/head-ache.svg",
      title: "Head Ache",
      subtitle: "explore treatment",
      modal: {
        title: "Head Ache Treatment Plan",
        subtitle: "Targeted physiotherapy for headaches and migraines",
        steps: [
          "Cervical mobility and stretching exercises",
          "Manual therapy for neck muscle tightness",
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
      icon: "/icon/shoulder-pain.svg",
      title: "Shoulder Pain",
      subtitle: "explore treatment",
      modal: {
        title: "Shoulder Pain Treatment Plan",
        subtitle: "Targeted physiotherapy for shoulder pain and stiffness",
        steps: [
          "Clinical assessment of shoulder movement and posture",
          "Manual therapy and joint mobilization",
          "Rotator cuff strengthening exercises",
          "Scapular stability and posture correction exercises",
          "Activity modification and ergonomic advice",
          "Progressive functional and strengthening program",
        ],
        nextStep:
          "Shoulder pain can result from multiple causes. A professional assessment ensures proper recovery and prevents recurrence.",
      },
    },

    {
      id: 3,
      icon: "/icon/neck-pain.svg",
      title: "Neck Pain",
      subtitle: "explore treatment",
      modal: {
        title: "Neck Pain Treatment Plan",
        subtitle: "Targeted physiotherapy for cervical strain and posture issues",
        steps: [
          "Detailed posture,  movement assessment and diagnosis",
          "Cervical spine mobilization and manual therapy",
          "Pain management using modalities (IFT, TENS, ultrasound if needed)",
          "Strengthening of deep neck flexors and upper back muscles",
          "Scapular stabilization exercises",
          "Activity modification and home exercise program",
        ],
        nextStep:
          "Neck pain often relates to posture and muscle imbalance. Guided physiotherapy improves long-term relief.",
      },
    },

    {
      id: 4,
      icon: "/icon/knee-pain.svg",
      title: "Knee Pain",
      subtitle: "explore treatment",
      modal: {
        title: "Knee Pain Treatment Plan",
        subtitle: "Strength-based physiotherapy for knee joint stability",
        steps: [
          "Clinical assessment of knee alignment, movement, and strengths",
          "Soft tissue release for quadriceps, hamstrings, and calf muscles",
          "Manual therapy and joint mobilization",
          "Pain and inflammation control (IFT, TENS, ultrasound if required)",
          "Strengthening of quadriceps, hamstrings, and hip muscles",
          "Functional training for stairs, sitting, and walking",
        ],
        nextStep:
          "Knee recovery depends on muscle strength and joint alignment. Professional supervision is recommended for best results.",
      },
    },

    {
      id: 5,
      icon: "/icon/elbow-pain.svg",
      title: "Elbow Pain",
      subtitle: "explore treatment",
      modal: {
        title: "Elbow Pain Treatment Plan",
        subtitle: "Targeted physiotherapy for elbow injuries and strain",
        steps: [
          "Clinical assessment of elbow movement, grip strength, and pain pattern",
          "Soft tissue release for forearm flexor and extensor muscles",
          "Pain and inflammation management (IFT, TENS, ultrasound if required)",
          "Progressive strengthening of wrist and elbow muscles",
          "Grip strengthening and functional training",
          "Home exercise program for long-term recovery"
        ],
        nextStep:
          "Elbow pain such as tennis elbow requires gradual strengthening and proper technique correction.",
      },
    },
     {
      id: 6,
      icon: "/icon/heel-pain.svg",
      title: "Heel Pain",
      subtitle: "explore treatment",
      modal: {
        title: "Heel Pain Treatment Plan",
        subtitle: "Targeted physiotherapy for heel injuries and strain",
        steps: [
          "Detailed assessment of foot posture, gait, and pain pattern",
          "Soft tissue release for plantar fascia and calf muscles",
          "Pain and inflammation management (IFT, TENS, ultrasound if required)",
          "Strengthening of foot intrinsic and ankle muscles",
          "Footwear advice and orthotic recommendations if needed",
          "Progressive functional and weight-bearing exercises",
        ],
        nextStep:
          "Heel pain such as plantar fasciitis requires gradual strengthening and proper technique correction.",
      },
    },
     {
      id: 7,
      icon: "/icon/Wrist-pain.svg",
      title: "Wrist Pain",
      subtitle: "explore treatment",
      modal: {
        title: "Wrist Pain Treatment Plan",
        subtitle: "Targeted physiotherapy for wrist injuries and strain",
        steps: [
          "Clinical assessment of wrist movement, strength, and pain pattern",
          "Soft tissue release for forearm and wrist muscles",
          "Pain and inflammation management (IFT, TENS, ultrasound if required)",
          "Stretching exercises to improve flexibility",
          "Tendon gliding and mobility exercises",
          "Functional training for daily and work-related tasks",
        ],
        nextStep:
          "Wrist pain such as carpal tunnel syndrome requires gradual strengthening and proper technique correction.",
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
              <div
                key={card.id}
                onClick={() => setActiveModal(card.modal)}
                className="w-full aspect-[282/209]"
              >
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
              <SwiperSlide
                key={card.id}
                className="!w-[282px] !h-[209px]"
              >
                <div onClick={() => setActiveModal(card.modal)} className="w-full h-full">
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
