"use client";

import Image from "next/image";

export default function ConditionCard({ icon, title, conditions, color = "#A8E2AD" }) {
  return (
    <div
      className="
        relative
        max-w-[36.75rem]
        w-full
        bg-white
        rounded-[1rem]
        shadow-[0px_1px_4px_0px_rgba(0,0,0,0.25)]
        overflow-hidden
      "
    >
      {/* LEFT COLOR ACCENT */}
      <div
        className="absolute left-0 top-0 h-full w-[6px]"
        style={{ backgroundColor: color }}
      />
      <div className="pl-[2.5rem] pr-[2rem] py-[2rem]">
        {/* HEADER */}
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center rounded-full">
            <Image src={icon} alt={title} width={44} height={44} />
          </div>

          <h4 className="text-[1.25rem] text-[#014579] font-semibold">
            {title}
          </h4>
        </div>

        {/* LIST */}
        <ul className="mt-[1.5rem] space-y-[0.75rem] max-h-[180px] overflow-y-auto pr-2">
          {conditions.map((item, index) => (
            <li key={index} className="flex items-start gap-2">
              <Image
                src="/icon/Green-Dot.svg"
                alt="green dot"
                width={8}
                height={8}
                className="mt-[6px]"
              />
              <p className="text-[#424242] text-[1rem] leading-[1.5rem]">
                {item}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
