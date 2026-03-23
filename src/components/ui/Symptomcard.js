import Image from "next/image";

export default function SymptomCard({ icon, title, subtitle }) {
  return (
    <div
      className="
        w-full
        h-full
        rounded-2xl
        bg-white
        flex flex-col
        items-center
        justify-center
        cursor-pointer
        
        shadow-[0px_1px_6.3px_0px_rgba(0,0,0,0.09)]
        transition-all duration-300 ease-out

        hover:shadow-[0px_0px_24px_0px_rgba(138,170,193,1)]
        hover:-translate-y-1
      "
    >
      {/* ICON */}
      <div className="mb-3 transition-transform duration-300 hover:scale-110">
        <Image src={icon} alt={title} width={42} height={42} />
      </div>

      {/* TITLE */}
      <div className="text-[1.125rem] font-semibold capitalize mb-1">{title}</div>

      {/* SUBTITLE */}
      <div className="text-[#757575] text-[1rem]">{subtitle}</div>
    </div>
  );
}