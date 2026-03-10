import Image from "next/image";
import Link from "next/link";

/* ------------------ Reusable Footer Column ------------------ */
function FooterColumn({ title, links }) {
  return (
    <nav aria-label={title} className="w-max me-7">
      <h3 className="text-white text-[1.1rem] font-semibold mb-4">{title}</h3>
      <ul className="space-y-3">
        {links.map((item, idx) => (
          <li key={idx}>
            <Link
              href={item.href}
              className="text-white text-[0.8rem] hover:underline"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

/* ------------------ Social Icons ------------------ */
function FooterSocials() {
  const socials = [
    { name: "Instagram", icon: "insta" },
    { name: "X", icon: "x" },
    { name: "Facebook", icon: "fb" },
    { name: "LinkedIn", icon: "linked-in" },
  ];

  return (
    <div className="flex gap-4 mt-8">
      {socials.map((social) => (
        <Link key={social.name} href="/" aria-label={social.name}>
          <Image
            src={`/${social.icon}-white-icon.svg`}
            alt={social.name}
            width={14}
            height={14}
          />
        </Link>
      ))}
    </div>
  );
}

/* ------------------ Footer ------------------ */
export default function Footer() {
  const footerLinks = [
    {
      title: "Our Service",
      links: [
         { label: "Accessible physiotherapy",  href: "/#accessible-physiotherapy", },
        { label: "Recovery roadmap", href: "/#recoveryroadmap" },
        { label: "Services offered", href: "/#serviceofferedpage" },
        { label: "Therapies offered", href: "/#therapiesoffered"},
        { label: "Find by symptom", href: "/#findbysymptompage" },
        { label: "Find by conditions ", href: "/#findbyconditionspage" },
        { label: "Symptom checker", href: "/ourservice/Symptom-checker"},
      ],
    },
    {
      title: "Company",
      links: [
     { label: "Clinic ", href: "/aboutUs/Clinic" },
        { label: "patients review ", href:  "/#patientsreviewpage" },
        { label: "Our location", href: "/#ourlocationspage" },
        { label: "FAQ", href: "/#faqpage"  },
        { label: "Map ", href: "/#mappage" },
      ],
    },{
      title:"Careers",
      links:[
        
        { label: "Current openings ", href: "/about" },
        { label: "Workshops", href: "/about/team" },
        { label: "Medical camps", href: "/about/team" },
        
      ]
    }
  ];

  return (
    <footer className="bg-[#014579] md:rounded-tl-[6.25rem] md:rounded-tr-[6.25rem] mt-12">
      <div className="max-w-[1440px] mx-auto px-6 md:px-28 pt-16">
        {/* 🔥 ORDER CONTROLLER */}
        <div className="flex flex-col md:flex-col-reverse">
          {/* -------- BRAND (FIRST ON MOBILE, SECOND ON DESKTOP) -------- */}
          <div className="mt-16 max-w-md">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="NBM Rhythm Physiotherapy"
                width={160}
                height={40}
                priority
              />
            </Link>

            <p className="text-white text-[0.8rem] mt-4 leading-relaxed">
              Leading physiotherapy center focused on restoring strength and
              mobility through personalized care and innovative treatment
              approaches.
            </p>

            <address className="not-italic mt-6 space-y-3 text-white text-[0.8rem]">
              <p className="flex items-center gap-2">
                <Image
                  src="/location-icon-white.svg"
                  alt=""
                  width={14}
                  height={14}
                />
                120, 40 Feet Rd, Lakshmi Nagar, Porur, Ch- 600116
              </p>
              <p className="flex items-center gap-2">
                <Image
                  src="/phone-icon-white.svg"
                  alt=""
                  width={14}
                  height={14}
                />
                +91 9600104848
              </p>
              <p className="flex items-center gap-2">
                <Image
                  src="/email-icon-white.svg"
                  alt=""
                  width={16}
                  height={16}
                />
                helpdesk@nbmrhythm.com
              </p>
              <p className="flex items-center gap-2">
                <Image
                  src="/clock-icon-white.svg"
                  alt=""
                  width={16}
                  height={16}
                />
                9:00 AM – 9:00 PM
              </p>
            </address>

            <FooterSocials />
          </div>

          {/* -------- LINKS (SECOND ON MOBILE, FIRST ON DESKTOP) -------- */}
          <div>
            <div className="grid grid-cols-1 md:grid-cols-3  w-max">
              {footerLinks.map((col) => (
                <FooterColumn
                  key={col.title}
                  title={col.title}
                  links={col.links}
                />
              ))}
            </div>
          </div>
        </div>

        {/* -------- BOTTOM BAR -------- */}
        <div className="border-t border-white/40 mt-16 py-6 flex flex-col md:flex-row md:justify-between gap-4">
          <p className="text-white text-[0.75rem]">
            © 2025 NBM Rhythm Physiotherapy & Integrated Wellness Centre. All
            rights reserved.
          </p>

          <div className="flex gap-4 text-white text-[0.75rem]">
            <Link href="/" className="hover:underline">
              Privacy Policy
            </Link>
            <Link href="/" className="hover:underline">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
