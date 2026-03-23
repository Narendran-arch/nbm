"use client";

import Link from "next/link";

export default function ServicePage() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-[#F5F7FA] px-6 text-center">
      <h1 className="text-[clamp(24px,3vw,40px)] font-bold text-[#014579]">
        Hey 👋 We Care
      </h1>

      <p className="mt-6 text-[clamp(14px,1.2vw,18px)] text-[#616161] max-w-xl">
        We&apos;re currently working on this page to give you the best possible
        experience.
        <br />
        Thank you for your patience and we sincerely apologize for the
        inconvenience.
      </p>

      <div className="mt-8">
        <Link
          href={"/"}
          className="px-6 py-3 rounded-xl bg-[#229D2E] text-white font-medium hover:opacity-90 transition"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
