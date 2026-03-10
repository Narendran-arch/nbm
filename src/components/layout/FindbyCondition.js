import ConditionCard from "../ui/Conditioncard";

export default function FindbyCondition() {
  const conditionCardsData = [
    {
      icon: "/Neurologyical.svg",
      title: "Neurological Rehabilitation",
      conditions: [
        "Stroke Recovery",
        "Parkinson’s Disease",
        "Multiple Sclerosis",
        "Traumatic Brain Injury",
        "Spinal Cord Injury",
        "Bell’s Palsy",
        "Guillain-Barré Syndrome",
        "Peripheral Neuropathy",
      ],
      color: "#A8E2AD",
    },
    {
      icon: "/Neurologyical.svg",
      title: "Orthopedic Conditions",
      conditions: [
        "ACL Injury",
        "Meniscus Tear",
        "Frozen Shoulder",
        "Rotator Cuff Injury",
        "Tennis Elbow",
        "Lumbar Spondylosis",
        "Cervical Spondylosis",
        "Fracture Rehabilitation",
      ],
      color: "#8AAAC1",
    },
    {
      icon: "/Neurologyical.svg",
      title: "Sports Injuries",
      conditions: [
        "Hamstring Strain",
        "Ankle Sprain",
        "Shin Splints",
        "Runner’s Knee",
        "Groin Strain",
        "Shoulder Dislocation",
        "Achilles Tendinitis",
        "Muscle Tear",
      ],
      color: "#F2B880",
    },
    {
      icon: "/Neurologyical.svg",
      title: "Chronic Pain Management",
      conditions: [
        "Chronic Lower Back Pain",
        "Sciatica",
        "Fibromyalgia",
        "Myofascial Pain Syndrome",
        "Postural Dysfunction",
        "Arthritis",
        "Disc Prolapse",
        "Neck & Shoulder Stiffness",
      ],
      color: "#D6A8E2",
    },
  ];

  return (
    <section className="mx-[1rem]  md:mx-[7rem] mb-[6rem]" id="findbyconditionspage">
      <div className="flex flex-col justify-center items-center">
        <div>
          <h1 className="text-[1.5rem] sm:text-[1.75rem] md:text-[2rem] lg:text-[2.25rem] xl:text-[2rem] 2k:text-[2.5rem] font-bold my-[2rem]  text-[#014579]">
            Find by condition
          </h1>
        </div>
        <div className="text-[#757575] mt-0 text-center text-[1.25rem] mb-[2.5rem] ">
          <h2>Browse treatments by medical condition category</h2>
        </div>
      </div>
      <div
        className="
    grid
    grid-cols-1
    gap-6
    md:grid-cols-2
    mt-[2rem]
    justify-items-center
  "
      >
        {conditionCardsData.map((item, index) => (
          <ConditionCard
            key={index}
            icon={item.icon}
            title={item.title}
            conditions={item.conditions}
            color={item.color}
          />
        ))}
      </div>
    </section>
  );
}
