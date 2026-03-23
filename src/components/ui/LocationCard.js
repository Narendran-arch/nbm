// components/LocationCard.js
import Image from "next/image";
import React from "react";

export default function LocationCard({ location }) {
  return (
    <div
      className="
    w-[380px]
    max-w-full
    aspect-[380/482]
    bg-white
    rounded-[1rem]
    shadow-md
    overflow-hidden
    hover:shadow-lg
    transition-shadow
    duration-300
    me-4
  "
    >
      {/* Image */}
      <div
        className="
           
relative h-[52%]        "
      >
        <Image
          width={390}
          height={245}
          src={location.image}
          alt={location.name}
          className="w-full h-full object-cover rounded-t-[1rem]"
        />
        <div className="absolute bottom-[10%] ms-[1rem]">
          <h3 className="text-[0.7rem] sm:text-[1.75rem] md:text-[1.2rem] lg:text-[2rem] xl:text-[1.2rem] 2k:text-[2.5rem] text-[#FFFFFF] font-black">
            {location.name}
          </h3>
        </div>
        <div className="absolute top-0 left-0 m-[1rem] bg-white px-3 py-1 rounded-full flex items-center gap-1 shadow">
          <span className="text-yellow-500 font-bold">★</span>
          <span className="font-semibold">{location.rating}</span>
          <span className="text-gray-500 text-sm">({location.reviews})</span>
        </div>
      </div>

      {/* Details */}
      <div
        className="
          p-4
          flex flex-col 
flex flex-col h-[48%] p-4        "
      >
        <div className="space-y-2 mb-10">
          <p className="flex items-center text-[#757575] font-bold  text-[12px] mb-[1rem]">
            <Image
              src="/icon/location-icon-blue.svg"
              width={16}
              height={16}
              alt="location-icon"
              className="me-1.5"
            />
            {location.address}
          </p>

          <p className="flex items-center text-[#757575] font-bold  text-[12px] mb-[1rem]">
            <Image
              src="/icon/phone-icon-blue.svg"
              width={18}
              height={18}
              alt="phone-icon"
              className="me-1.5"
            />
            {location.phone}
          </p>

          <p className="flex items-center text-[#757575] font-bold  text-[12px] mb-[1rem]">
            <Image
              src="/icon/clock-icon-blue.svg"
              width={16}
              height={16}
              alt="clock-icon"
              className="me-1.5"
            />

            {location.hours}
          </p>
        </div>

        <button className="w-full bg-[#229D2E] text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors">
          <div
            className="flex flex-row items-center justify-center hover:cursor-pointer"
            onClick={() => {
              window.open(`${location.map}`, "_blank");
            }}
          >
            <span className="m-2">
              <Image
                src="/icon/arrow-right-white-icon.svg"
                width={16}
                height={14}
                alt="arrow-right-white-icon"
              />
            </span>
            <span>Get Direction</span>
          </div>
        </button>
      </div>
    </div>
  );
}
