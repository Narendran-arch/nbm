"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLandingPage } from "@/context/LandingPageContext";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const { isLandingPage } = useLandingPage();
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);
  const pathname = usePathname();
  const isActive = (item) => {
    if (item.name === "Home") return pathname === "/";

    if (item.name === "Our Service") return pathname.startsWith("/ourservice");

    if (item.name === "About") return pathname.startsWith("/about");

    if (item.name === "Careers") return pathname.startsWith("/careers");

    if (item.name === "Blog") return pathname.startsWith("/blog");

    return false;
  };

  const menuItems = [
    { name: "Home", href: "/" },
    {
      name: "Our Service",
      href: "",
      dropdown: [
        { label: "Accessible physiotherapy", href: "/#accessible-physiotherapy", },
        { label: "Recovery roadmap", href: "/#recoveryroadmap" },
        { label: "Services offered", href: "/#serviceofferedpage" },
        { label: "Therapies offered", href: "/#therapiesoffered" },
        { label: "Find by symptom", href: "/#findbysymptompage" },
        { label: "Find by conditions ", href: "/#findbyconditionspage" },
        { label: "Symptom checker", href: "/ourservice/Symptom-checker" },
      ],
    },
    {
      name: "About",
      href: "",
      dropdown: [
        { label: "Clinic ", href: "/aboutUs/Clinic" },
        { label: "patients review ", href: "/#patientsreviewpage" },
        { label: "Our location", href: "/#ourlocationspage" },
        { label: "FAQ", href: "/#faqpage" },
        { label: "Map ", href: "/#mappage" },
      ],
    },
    {
      name: "Careers",
      href: "",
      dropdown: [
        { label: "Current openings ", href: "/about" },
        { label: "Workshops", href: "/about/team" },
        { label: "Medical camps", href: "/about/team" },
      ],
    },
    {
      name: "Blog",
      href: "",
      dropdown: [
        { label: "Exercise tutorial ", href: "/about" },
        { label: "List of blogs", href: "/about/team" },
      ],
    },
  ];

  return (
    <div>
      <div className="hidden lg:block">
        <nav
          className={`fixed ${isLandingPage ? "top-[4.5vh]" : "top-0"} left-0 w-full z-50`}
        >
          <div className="mx-auto">
            <div
              className={`grid 
              ${isLandingPage ? "grid-cols-[2fr_1fr]" : "grid-cols-[3fr_2fr]"}`}
            >
              {/* LEFT */}
              <div
                className={`flex items-center justify-evenly 
                ${isLandingPage ? "bg-nav-gradient" : "bg-hero-gradient"}`}
              >
                <Link href="/">
                  <Image
                    src="/logo.png"
                    alt="NBM Rhythm"
                    width={160}
                    height={40}
                    priority
                    className="w-[clamp(120px,11vw,180px)] h-auto"
                  />
                </Link>

                <ul
                  className={`flex items-center ${isLandingPage ? "mb-3" : "py-5"
                    } z-50 text-white font-medium `}
                >
                  {menuItems.map((item) => (
                    <li
                      key={item.name}
                      className="relative"
                      onMouseEnter={() => setOpenDropdown(item.name)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      {item.dropdown ? (
                        <button
                          type="button"
                          onClick={() =>
                            setOpenDropdown(
                              openDropdown === item.name ? null : item.name,
                            )
                          }
                          className={`
                             hover:cursor-pointer
  flex items-center justify-center 
  h-[clamp(36px,3.9vh,44px)]
  px-[clamp(14px,1.5vw,24px)]
  font-medium
transition-all duration-200 ease-in-out  ${openDropdown === item.name
                              ? `
      bg-white text-black
      rounded-t-xl
      border-t-2 border-l-2 border-r-2
      border-[#229D2E]
    `
                              : `
      text-white
      hover:bg-white hover:text-black
      hover:rounded-t-xl
      hover:border-t-2 hover:border-l-2 hover:border-r-2
      hover:border-[#229D2E]
       after:absolute
  after:bottom-[6px]
  after:left-1/2
  after:-translate-x-1/2
  after:h-[2px]
  after:bg-[#ffffff]
  after:transition-all
  after:duration-300
  after:content-['']
  ${isActive(item) ? "after:w-[60%]" : "after:w-0"}
    `
                            }

`}
                        >
                          {item.name}
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                          >
                            <path d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                      ) : (
                        <Link
                          href={item.href}

                          className={`
  flex items-center justify-center 
  h-[clamp(36px,3.9vh,44px)]
  px-[clamp(14px,1.5vw,24px)]
  font-medium
  hover:cursor-pointer
  transition-colors duration-200
  hover:bg-white hover:text-black hover:rounded hover:border-[#229D2E] hover:border-[2px]
   after:absolute
  after:bottom-[6px]
  after:left-1/2
  after:-translate-x-1/2
  after:h-[2px]
  after:bg-[#ffffff]
  after:transition-all
  after:duration-300
  after:content-['']
  ${isActive(item) ? "after:w-[60%]" : "after:w-0"}
  
`}
                        >
                          {item.name}
                        </Link>
                      )}

                      {item.dropdown && openDropdown === item.name && (
                        <div
                          onMouseEnter={() => setOpenDropdown(item.name)}
                          className="
  absolute
  top-full
  left-0
  min-w-full
  w-max
  bg-white
  text-gray-700
  rounded-b-xl
  border-l-2 border-r-2 border-b-2
  border-[#229D2E]
  border-t-0
  shadow-xl
  z-50
  py-[clamp(16px,1.8vh,24px)]
"
                        >
                          {item.dropdown.map((drop) => (
                            <Link
                              key={drop.label}
                              href={drop.href}
                              className="
              block
              px-[clamp(16px,1.2vw,24px)]
              py-[clamp(8px,1vh,12px)]
              text-[clamp(13px,0.9vw,16px)]
              hover:bg-gray-100
            "
                            >
                              {drop.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              {/* RIGHT CTA */}
              <div
                className={`flex items-center justify-center ${isLandingPage ? "" : "bg-hero-gradient"
                  }`}
              >
                <a
                  href="https://wa.me/919600104848?text=Hi%20I%20would%20like%20to%20book%20an%20appointment"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Book appointment on WhatsApp"
                  className="flex flex-row justify-center items-center border border-[#FFFFFF80] rounded-xl text-[#FFFFFF] text-[clamp(11px,0.83vw,14px)] font-semibold w-[clamp(150px,13.9vw,240px)] h-[clamp(30px,5.5vh,44px)] bg-[#229D2E]"
                >
                  <span>
                    <Image
                      src="/arrow-slim-right-white.svg"
                      alt="arrow"
                      width={22}
                      height={22}
                    />
                  </span>
                  <span className="ms-3">Book Appointment</span>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* MOBILE */}
      <nav className="lg:hidden bg-hero-gradient fixed w-full z-50">
        {/* Top Bar */}
        <div className="flex items-center justify-between px-5 pt-5 pb-4">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="NBM Rhythm"
              width={160}
              height={40}
              priority
              className="h-auto w-[140px]"
            />
          </Link>

          {/* Hamburger / Close */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-white"
          >
            {mobileOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Dropdown Panel */}
        {mobileOpen && (
          <div className="px-4 pb-6">
            <div className="bg-[#EDEDED] rounded-xl py-6 px-6 shadow-lg">
              <ul className="space-y-5 text-[16px] font-medium text-[#333]">
                {menuItems.map((item, index) => {
                  const hasDropdown = item.dropdown && item.dropdown.length > 0;

                  return (
                    <li key={item.name}>
                      {/* ===== NORMAL LINK ===== */}
                      {!hasDropdown && (
                        <Link
                          href={item.href}
                          onClick={() => setMobileOpen(false)}
                          className="block"
                        >
                          {item.name}
                        </Link>
                      )}

                      {/* ===== DROPDOWN ITEM ===== */}
                      {hasDropdown && (
                        <>
                          <button
                            onClick={() =>
                              setOpenMobileDropdown(
                                openMobileDropdown === index ? null : index,
                              )
                            }
                            className="w-full flex items-center justify-between"
                          >
                            {item.name}

                            <svg
                              className={`w-4 h-4 transition-transform duration-300 ${openMobileDropdown === index ? "rotate-180" : ""
                                }`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          </button>

                          {/* Submenu */}
                          <div
                            className={`overflow-hidden transition-all duration-300 ${openMobileDropdown === index
                                ? "max-h-[500px] mt-4"
                                : "max-h-0"
                              }`}
                          >
                            <ul className="space-y-3 pl-4 text-[14px] text-[#555]">
                              {item.dropdown.map((subItem) => (
                                <li key={subItem.label}>
                                  <Link
                                    href={subItem.href}
                                    onClick={() => {
                                      setMobileOpen(false);
                                      setOpenMobileDropdown(null);
                                    }}
                                    className="block"
                                  >
                                    {subItem.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
