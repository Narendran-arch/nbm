import ConditionCard from "../ui/Conditioncard";

export default function FindbyCondition() {
  const conditionCardsData = [
    {
      icon: "/icon/ortho-pain.svg",
      title: "Orthopedic Pain",
      conditions: [
        "Musculoskeletal pain",
        "Cervical spondylosis",
        "Cervical radiculopathy",
        "Frozen shoulder",
        "Rotator cuff impingement",
        "Labrum tear / ligament tear",
        "Tennis elbow / Golfer’s elbow",
        "Lumbar spondylosis",
        "Knee osteoarthritis",
        "Post-fracture rehabilitation",
      ],
      color: "#A8E2AD",
    },

    {
      icon: "/icon/heart-clrbg-no-fill.svg",
      title: "General Fitness",
      conditions: [
        "Cardiovascular endurance",
        "Muscular endurance",
        "Muscular strength",
        "Muscle flexibility",
        "Body composition improvement",
        "Weight management programs",
        "Functional fitness training",
        "Postural fitness training",
        "Injury prevention exercises",
        "Core strengthening programs",
      ],
      color: "#8AAAC1",
    },

    {
      icon: "/icon/Neurologyical.svg",
      title: "Neurological Conditions",
      conditions: [
        "Stroke recovery",
        "Parkinson’s disease",
        "Multiple sclerosis",
        "Traumatic brain injury",
        "Spinal cord injury",
        "Bell’s palsy",
        "Guillain-Barré syndrome",
        "Peripheral neuropathy",
        "Balance and coordination disorders",
        "Gait training rehabilitation",
      ],
      color: "#A8E2AD",
    },

    {
      icon: "icon/stethoscope-clrbg.svg",
      title: "Cardiovascular",
      conditions: [
        "Cardiac rehabilitation",
        "Respiratory physiotherapy",
        "Post-cardiac surgery rehabilitation",
        "Exercise prescription programs",
        "Pulmonary rehabilitation",
        "Breathing exercises training",
        "Endurance training",
        "Patient monitoring programs",
        "Lifestyle modification education",
        "Functional capacity improvement",
      ],
      color: "#8AAAC1",
    },
  ];

  return (
    <section className="px-[1rem]  md:px-[7rem] mb-[6rem]" id="findbyconditionspage">
      <div className="flex flex-col justify-center items-center">
        <div>
          <h1 className="text-[1.5rem] sm:text-[1.75rem] md:text-[2rem] lg:text-[2.25rem] xl:text-[2rem] 2k:text-[2.5rem] font-bold my-[2rem]  text-[#014579]">
            Find by Speciality
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
