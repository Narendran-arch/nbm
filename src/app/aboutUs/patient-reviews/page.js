"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function PatientReviewsPage() {
  /* ---------------- REVIEW DATASET ---------------- */
  const reviews = [
    {
      id: 1,
      name: "Meenakshi R",
      location: "Chennai",
      image: "/patient.png",
      review:
        "The team helped me recover faster than expected. The physiotherapists were extremely supportive and professional.",
    },
    {
      id: 2,
      name: "Raj Verma",
      location: "Vellore",
      image: "/patient.png",
      review:
        "Finally found relief from chronic back pain. The treatment plan was structured and effective.",
    },
    {
      id: 3,
      name: "Annie D",
      location: "Bangalore",
      image: "/patient.png",
      review:
        "Excellent patient care and post-surgery rehabilitation. I feel stronger and more confident.",
    },
    {
      id: 4,
      name: "Suresh K",
      location: "Coimbatore",
      image: "/patient.png",
      review:
        "Professional staff and modern therapy methods. My knee pain has reduced significantly.",
    },
  ];

  /* ---------------- REUSABLE CARD ---------------- */
  const ReviewCard = ({ data }) => {
    return (
      <div
        className="
  bg-white rounded-2xl shadow-sm
  w-[443px] h-[193px]
  max-lg:w-[360px] max-lg:h-[170px]
  max-md:w-[300px] max-md:h-[160px]
  max-sm:w-full max-sm:h-auto
  flex flex-col justify-between
  p-6
"
      >
        {/* Stars */}
        <div className="flex gap-1">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <span key={i} className="text-yellow-400 text-sm">
                ★
              </span>
            ))}
        </div>

        {/* Review Text */}
        <p className="text-[14px] text-[#333] leading-[22px] line-clamp-2">
          “{data.review}”
        </p>

        {/* Bottom Section */}
        <div className="flex items-center justify-between">
          {/* User */}
          <div className="flex items-center gap-3">
            <Image
              src={data.image}
              alt={data.name}
              width={40}
              height={40}
              className="rounded-full object-cover"
            />
            <div>
              <p className="text-[14px] font-semibold text-[#014579]">
                {data.name}
              </p>
              <p className="text-[12px] text-[#757575]">{data.location}</p>
            </div>
          </div>

          {/* Verified Badge */}
          <div className="bg-green-100 text-green-600 text-[12px] px-3 py-1 rounded-full flex items-center gap-1">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            Verified Patient
          </div>
        </div>
      </div>
    );
  };

  return (
    <section
      className="relative w-full min-h-screen flex flex-col justify-center"
      style={{
        backgroundImage: "url('/review-backgorund.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}

      <div className="relative z-10 max-w-[1440px] mx-auto w-full px-6 lg:px-16 py-16">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className=" font-bold text-[#014579]">
            What Our Patients Say
          </h1>
        </div>

        {/* SWIPER */}
        <Swiper
          modules={[Mousewheel, Pagination]}
          mousewheel={{ forceToAxis: true }}
          pagination={{ clickable: true }}
          spaceBetween={32}
          slidesPerView="auto"
          centeredSlides={false}
          className="pb-16"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id} className="!w-[443px] !h-[193px]">
              <ReviewCard data={review} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
