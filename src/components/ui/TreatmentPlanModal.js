"use client";

import Image from "next/image";

export default function TreatmentPlanModal({ data, onClose }) {
  if (!data) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      {/* MODAL */}
      <div className="relative w-[100vw] md:w-[90vw] sm:w-full max-w-[62.25rem] max-h-[90vh] rounded-[1rem] bg-white overflow-hidden shadow-xl">
        {/* CLOSE BUTTON (not in Figma but required) */}
        <button
          onClick={onClose}
          className="absolute top-8 right-8 text-[#014579] text-xl font-bold hover:opacity-70"
        >
          ✕
        </button>

        {/* HEADER */}
        <div className="bg-[#ADD4F1DE] px-[3rem] py-5">
          <h1 className="text-[2rem] text-center md:text-[2.25rem] font-bold text-[#014579]">
            {data.title}
          </h1>
          <p className="text-[1.25rem] pt-[1rem] text-center text-[#757575]">
            {data.subtitle}
          </p>
        </div>

        {/* CONTENT */}
        <div className="  pt-[2.75rem] px-[1rem] md:px-[3rem] overflow-y-auto max-h-[calc(90vh-200px)]">
          <h3 className="font-bold md:font-semibold pb-[2rem] text-[#014579] text-[1.5rem] mb-3">
            Your Treatment Plan
          </h3>

          <ul className="space-y-3">
            {data.steps.map((step, index) => (
              <li
                key={index}
                className="bg-[#F3F9FD] flex items-start gap-3 rounded-[2rem] border px-2 md:px-4 py-[0.5rem] md:py-[1.313rem] mb-[1rem] text-sm"
              >
                <span>
                  <Image
                    src="/icon/charm_circle-tick.svg"
                    alt="charm_circle-tick"
                    width={22}
                    height={22}
                  />
                </span>
                <span className="text-[0.875rem]">{step}</span>
              </li>
            ))}
          </ul>

          {/* NEXT STEP */}
          <div
            className="mt-5 mb-[1.625rem] rounded-xl shadow-[0px_0.5px_4px_0px_rgba(0,0,0,0.25)] bg-[#F5FAFF] p-4"
          >
            <h4 className="font-semibold text-[1.25rem] text-[#014579] mb-1">Next Step</h4>
            <p className="text-[1rem] text-[#757575]">{data.nextStep}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
