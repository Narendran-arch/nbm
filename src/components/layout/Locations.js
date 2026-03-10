export default function Locations() {
  return (
    <section
      className="flex flex-col items-center justify-center px-[1rem]          /* mobile ~16px */
sm:px-[2rem]       /* ≥640px ~32px */
md:px-[4rem]       /* ≥768px ~64px */
lg:px-[6rem]       /* ≥1024px ~96px */
xl:px-[18rem]      /* ≥1440px ← FIGMA */
2k:px-[20rem]      /* ≥1920px optional */"
id="mappage"
    >
      <h1 className="text-[1.5rem] sm:text-[1.75rem] md:text-[2rem] lg:text-[2.25rem] xl:text-[2rem] 2k:text-[2.5rem] font-bold my-[2rem]  text-[#014579]">Locations</h1>

      <div className="w-full h-[500px] md:h-[600px] rounded-xl overflow-hidden shadow-md">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d124405.45449570198!2d80.1642667170826!3d12.992917302624512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1snbm%20rhythm%20physiotherapy!5e0!3m2!1sen!2sin!4v1769928414529!5m2!1sen!2sin"
          className="w-full h-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}
