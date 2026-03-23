import Image from "next/image";

export function RecoveryCenter() {
  return (
    <div className="flex flex-col items-center text-center ">
      <Image
        src="/threeSteps/Recovery.svg"
        alt="Recovery"
        width={210}
        height={250}
      />
      <p className="mt-3 font-semibold text-[16px]">Recovery</p>
    </div>
  );
}
