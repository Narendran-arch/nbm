"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { albraBold } from "@/app/fonts";
import { useLandingPage } from "@/context/LandingPageContext";
import { motion, useReducedMotion } from "framer-motion";

export default function Landing() {
  const { setIsLandingPage } = useLandingPage();
  const heroRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsLandingPage(entry.isIntersecting),
      { threshold: 0.15 }
    );

    heroRef.current && observer.observe(heroRef.current);
    return () => heroRef.current && observer.unobserve(heroRef.current);
  }, [setIsLandingPage]);

  const fadeUp = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <>
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              name: "NBM Rhythm Physiotherapy",
              image: "https://nbmrhythm.com/landing/hero.png",
              telephone: "+919600104848",
              email: "helpdesk@nbmrhythm.com",
              url: "https://nbmrhythm.com",
              sameAs: [
                "https://www.instagram.com/nbmrhythm/",
                "https://www.facebook.com/Nbmrhythm/",
              ],
            }),
          }}
        />
      </>
      <section
        ref={heroRef}
        aria-label="Physiotherapy Hero Section"
        className="relative lg:min-h-screen bg-hero-gradient overflow-hidden"
      >
        {/* ========================== */}
        {/* ===== DESKTOP VERSION ==== */}
        {/* ========================== */}

        <div className="hidden lg:grid grid-cols-[3fr_2fr] min-h-screen">
          {/* LEFT CONTENT (FIXED) */}
          {/* Removed absolute positioning and added justify-center to dynamically center vertically */}
          <div className="flex flex-col pl-[6.5vw] justify-center h-full py-20 z-10">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-col h-full justify-center"
            >
              <div className="w-full">
                <h1
                  className={`${albraBold.className} text-[#FFFFFF] leading-[1.5] tracking-[0]`}
                >
                  <span className="block text-[clamp(36px,3.89vw,70px)]">
                    Physiotherapy that restores
                  </span>
                  <span className="block text-[clamp(48px,5.42vw,95px)]">
                    Strength & Mobility
                  </span>
                </h1>
              </div>

              <div className="mt-[clamp(22px,1.5vw,44px)]">
                <h3 className="font-bold text-[#FFFFFF] text-[clamp(18px,1.67vw,28px)]">
                  Personalized physio care to help you recover, move better,
                  and feel great
                </h3>
              </div>

              <motion.div
                variants={fadeIn}
                className="flex flex-col gap-y-4 mt-[clamp(30px,5vh,90px)]"
              >
                <div className="flex flex-row gap-20">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/icon/tick-circle-white.svg"
                      width={14}
                      height={14}
                      alt="tick-circle"
                    />
                    <div className="text-[#FFFFFF] text-[clamp(16px,1vw,22px)]">
                      Licensed Professionals
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Image
                      src="/icon/tick-circle-white.svg"
                      width={14}
                      height={14}
                      alt="tick-circle"
                    />
                    <div className="text-[#FFFFFF] text-[clamp(16px,1vw,22px)]">
                      10 + Years of Experience
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Image
                    src="/icon/tick-circle-white.svg"
                    width={14}
                    height={14}
                    alt="tick-circle"
                  />
                  <div className="text-[#FFFFFF] text-[clamp(16px,1vw,22px)]">
                    40k + Trusted patients
                  </div>
                </div>
              </motion.div>

              <div className="mt-[clamp(30px,5vh,90px)] flex flex-row gap-5">
                <a
                  href="https://wa.me/919600104848?text=Hi%20I%20would%20like%20to%20book%20an%20appointment"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Book appointment on WhatsApp"
                  className="flex z-40 items-center justify-center border border-[#FFFFFF80] rounded-xl text-[#FFFFFF] text-[clamp(15px,1.25vw,20px)] font-semibold gap-2 w-[19.6vw] h-[5.5vh] min-h-[50px] bg-[#229D2E]"
                >
                  <Image
                    src="/icon/arrow-slim-right-white.svg"
                    alt=""
                    width={24}
                    height={24}
                  />
                  <span>Book Appointment</span>
                </a>

                <a
                  href="tel:+919600104848"
                  className="flex items-center justify-center border border-[#4ADE80] rounded-xl text-[#FFFFFF] text-[clamp(15px,1.25vw,20px)] font-semibold gap-2 w-[19.6vw] h-[5.5vh] min-h-[50px] bg-transparent"
                >
                  <Image
                    src="/icon/phone-icon-white-fill.svg"
                    alt=""
                    width={24}
                    height={24}
                  />
                  <span>contact us</span>
                </a>
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE (UNTOUCHED) */}
          <div className="w-full relative h-screen">
            <motion.div
              initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="flex items-center justify-center"
            >
              <Image
                src="/landing/hero.png"
                alt="hero"
                width={556}
                height={569}
                className="z-40 absolute bottom-0 right-0 2xl:right-15 h-auto
              w-full
              2xl:w-[80%]
              max-w-[572px]
              "
              />

              <div className="h-screen relative flex items-center bg-[#FFFFFFD6] ms-[18%] w-[49%]">
                <div className="absolute top-[25vh] right-[10%]">
                  <div className="flex flex-col gap-y-4">
                    <div className="flex items-center gap-2">
                      <Image
                        src="/icon/phone-icon-blue-fill.svg"
                        alt=""
                        width={20}
                        height={20}
                      />
                      <a
                        href="tel:+919600104848"
                        className="text-[#014579] text-[clamp(14px,0.8vw,16px)]"
                      >
                        : 9600104848
                      </a>
                    </div>

                    <div className="flex items-center gap-2">
                      <Image
                        src="/icon/email-icon-emote.svg"
                        alt=""
                        width={20}
                        height={20}
                      />
                      <a
                        href={`mailto:helpdesk@nbmrhythm.com
    ?subject=Appointment%20Request
    &body=Hi%2C%0A%0AI%20would%20like%20to%20book%20an%20appointment.%0A%0AName%3A%0APhone%3A%0APreferred%20Date%3A`}
                        className="text-[#424242] text-[clamp(14px,0.8vw,16px)]"
                      >
                        : helpdesk@nbmrhythm.com
                      </a>
                    </div>

                    <div className="flex items-center gap-2">
                      <a
                        href="https://www.instagram.com/nbmrhythm/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="instagram link"
                      >
                        <Image
                          src="/icon/insta-icon.svg"
                          alt=""
                          width={18}
                          height={18}
                        />
                      </a>
                      <a
                        href="https://www.facebook.com/Nbmrhythm/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="facebook link"
                      >
                        <Image
                          src="/icon/fb-icon.svg"
                          alt=""
                          width={20}
                          height={20}
                        />
                      </a>

                      <Image
                        src="/icon/linkedin-icon.svg"
                        alt=""
                        width={20}
                        height={20}
                      />
                      <Image src="/icon/x-icon.svg" alt="" width={16} height={16} />
                      <Image src="/icon/yt-icon.svg" alt="" width={20} height={20} />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ========================== */}
        {/* ===== MOBILE VERSION (UNTOUCHED) ===== */}
        {/* ========================== */}

        <div className="lg:hidden px-4 pt-24 ">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <h1 className={`${albraBold.className} text-white leading-[1.8]`}>
              <span className="block text-[clamp(30px,4vw,52px)]">
                Physiotherapy that restores
              </span>
              <span className="block text-[clamp(38px,2rem,62px)]">Strength & Mobility</span>
            </h1>

            <h3 className="mt-4 text-white font-semibold text-[16px] leading-6">
              Personalized physio care to help you recover, move better, and
              feel great
            </h3>
          </motion.div>
          <div className="mt-8 space-y-4">
            {/* Row 1 */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="flex justify-between"
            >
              <div className="flex items-center gap-2">
                <Image
                  src="/icon/tick-circle-white.svg"
                  width={14}
                  height={14}
                  alt=""
                />
                <span className="text-white text-[14px]">
                  Licensed Professionals
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Image
                  src="/icon/tick-circle-white.svg"
                  width={14}
                  height={14}
                  alt=""
                />
                <span className="text-white text-[14px]">
                  10 + Years of Experience
                </span>
              </div>
            </motion.div>

            {/* Row 2 */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="flex items-center gap-2"
            >
              <Image
                src="/icon/tick-circle-white.svg"
                width={14}
                height={14}
                alt=""
              />
              <span className="text-white text-[14px]">
                40k + Trusted patients
              </span>
            </motion.div>
          </div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-8 space-y-4"
          >
            <a
              href="https://wa.me/919600104848?text=Hi%20I%20would%20like%20to%20book%20an%20appointment"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Book appointment on WhatsApp"
              className="w-full h-[52px] bg-[#229D2E] rounded-xl flex items-center justify-center gap-2 text-white font-semibold text-[15px]"
            >
              <Image
                src="/icon/arrow-slim-right-white.svg"
                alt=""
                width={20}
                height={20}
              />
              Book Appointment
            </a>

            <a
              href="tel:+919600104848"
              className="w-full h-[52px] border border-[#4ADE80] rounded-xl flex items-center justify-center gap-2 text-white font-semibold text-[15px]"
            >
              <Image
                src="/icon/phone-icon-white-fill.svg"
                alt=""
                width={20}
                height={20}
              />
              contact us
            </a>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="relative mt-12 flex justify-center"
          >
            <Image
              src="/landing/hero.png"
              alt="hero"
              width={420}
              height={450}
              className="w-[90%] h-auto"
            />
            <>
              {/* Floating Contact Card */}
              <div className="lg:hidden absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-[50%] w-[92%]">
                {" "}
                <div className="bg-[#FFFFFFB0] backdrop-blur-md rounded-2xl shadow-xl p-5">
                  <div className="flex flex-col gap-y-4">
                    {/* Phone */}
                    <div className="flex items-center gap-2">
                      <Image
                        src="/icon/phone-icon-blue-fill.svg"
                        alt=""
                        width={18}
                        height={18}
                        className="hover:cursor-pointer"
                      />
                      <a
                        href="tel:+919600104848"
                        className="text-[#014579] text-[14px] hover:cursor-pointer"
                      >
                        : 9600104848
                      </a>
                    </div>

                    {/* Email */}
                    <div className="flex items-center gap-2">
                      <Image
                        src="/icon/email-icon-emote.svg"
                        alt=""
                        width={18}
                        height={18}
                         className="hover:cursor-pointer"
                      />
                      <a
                        href={`mailto:helpdesk@nbmrhythm.com
    ?subject=Appointment%20Request
    &body=Hi%2C%0A%0AI%20would%20like%20to%20book%20an%20appointment.%0A%0AName%3A%0APhone%3A%0APreferred%20Date%3A`}
                        className="text-[#424242] text-[14px]"
                      >
                        : helpdesk@nbmrhythm.com
                      </a>
                    </div>

                    {/* Social Icons */}
                    <div className="flex items-center gap-3 pt-1">
                      <a
                        href="https://www.instagram.com/nbmrhythm/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="instagram link"
                      >
                        <Image
                          src="/icon/insta-icon.svg"
                          alt=""
                          width={18}
                          height={18}
                        />
                      </a>

                      <Image src="/icon/fb-icon.svg" alt="" width={18} height={18} />
                      <Image
                        src="/icon/linkedin-icon.svg"
                        alt=""
                        width={18}
                        height={18}
                      />
                      <Image src="/icon/x-icon.svg" alt="" width={16} height={16} />
                      <Image src="/icon/yt-icon.svg" alt="" width={18} height={18} />
                    </div>
                  </div>
                </div>
              </div>
            </>
          </motion.div>
        </div>
        {/* SCROLL INDICATOR */}
        <div className="hidden lg:flex absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-xs flex-col items-center gap-1">
          <span>Scroll</span>
          <div className="w-5 h-9 border border-white rounded-full flex justify-center">
            <span className="w-1 h-1.5 bg-white rounded-full mt-2 animate-bounce" />
          </div>
        </div>
        {/* PARTICLES (DESKTOP ONLY) */}
        <div className="hidden lg:block absolute bottom-0 left-0">
          <Image
            src="/landing/home-partical-bottom-1.png"
            width={250}
            height={200}
            alt=""
          />
        </div>

        <div className="hidden lg:block absolute bottom-0 left-0">
          <Image
            src="/landing/home-partical-bottom-2.png"
            width={300}
            height={200}
            alt=""
          />
        </div>

        <div className="hidden lg:block absolute top-0 right-0">
          <Image src="/landing/home-partical-top.png" width={150} height={300} alt="" />
        </div>
      </section>
    </>
  );
}