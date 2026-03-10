"use client";
import LocationCard from "../ui/LocationCard";

export default function OurLocation() {
  const locations = [
    {
      id: 1,
      name: "NBM RHYTHM (PORUR)",
      address: "120, 40 Feet Rd, Lakshmi Nagar, Porur, Ch- 600116",
      phone: "9600104848",
      hours: "Mon-Sat: 9:30 AM-2:00 PM , 5:00 PM-9:00 PM",
      rating: 4.9,
      reviews: 750,
      image: "/office-location.png", // replace with your image path
      map:"https://maps.app.goo.gl/6Ceh8Rm5rHgRqVTJ8"
    },
    {
      id: 2,
      name: "NBM RHYTHM (NANGANALLUR)",
      address: "14, 10th St, Ram Nagar, Nanganallur, Ch- 600061",
      phone: "95001 24848, 96001 04848",
      hours: "Mon-Sat: 9:30 AM- 9PM",
      rating: 4.9,
      reviews: 80,
      image: "/office-location.png", // replace with your image path
      map:"https://maps.app.goo.gl/samMzXX7h7DdoPe87"
    },
    {
      id: 3,
      name: "NBM RHYTHM (MADIPAKKAM)",
      address: "831, 7th Cross Street, Ram Nagar South, Madipakkam, Ch- 600091",
      phone: "96001 09489",
      hours: "Mon-Sat: 9:30 AM - 9:00 PM",
      rating: 4.9,
      reviews: 80,
      image: "/office-location.png", // replace with your image path
      map:"https://maps.app.goo.gl/KBK4VrdY5SWo3taW7"
    },
    {
      id: 4,
      name: "NBM RHYTHM (MANGADU)",
      address: "No:1, CTA Garden, Mangadu ch-600122",
      phone: "95001 99144",
      hours: "Mon-Sat: 5:00 PM - 8:00 PM",
      rating: 4.9,
      reviews: 80,
      image: "/office-location.png", // replace with your image path
      map:"https://maps.app.goo.gl/ufBDEM1eCMicFcR97"
    },
    // Add more locations if needed
  ];
  return (
    <section
      className="ms-[clamp(16px,5vw,120px)]" id="ourlocationspage"
    >
      <div className="flex flex-col items-center justify-center mx-[2.5rem] md:mx-[0%] text-center">
        <div>
          <h1 className="text-[1.5rem] sm:text-[1.75rem] md:text-[2rem] lg:text-[2.25rem] xl:text-[2rem] 2k:text-[2.5rem] font-bold my-[2rem]  text-[#014579]">
            Our Locations
          </h1>
        </div>
        <div>
          <h2
            className="text-[#757575] text-[0.875rem]  /* default base size */
   sm:text-[1rem]          /* small screens */
   md:text-[1.125rem]      /* medium screens */
   lg:text-[1.25rem]       /* large screens */
   xl:text-[1rem]          /* 1440px */
   2k:text-[1.5rem]"
          >
            Serving patients across the city with multiple physiotherapy clinics
            for easy access and convenience.
          </h2>
        </div>
      </div>
      <div
        className="mt-[2rem]     /* base */
   sm:mt-[3rem]          /* small screens */
   md:mt-[5rem]          /* medium screens */
   lg:mt-[6rem]          /* large screens */
   xl:mt-[7rem]          /* 1440px */
   2k:mt-[9rem]"
      >
        <div className="flex flex-col md:flex-row overflow-x-auto snap-x snap-mandatory">
          {locations.map((loc) => (
            <div key={loc.id}>
              <LocationCard location={loc} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
