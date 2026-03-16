import Landing from "@/components/layout/Landing";
import LandingClinic from "@/components/layout/Landing-clinic";
import Threesteps from "@/components/layout/ThreeSteps";
import ServiceOffered from "@/components/layout/OurserviceLanding";
import TherapiesOffered from "./ourservice/therapies/page";
import FindbySymptom from "@/components/layout/FindbySymptom";
import FindbyCondition from "@/components/layout/FindbyCondition";
import PatientReviewsPage from "@/components/layout/RivewComp";
import OurLocation from "@/components/layout/OurLocation";
import Faq from "@/components/sections/Faq";
import Locations from "@/components/layout/Locations";
import { Analytics } from '@vercel/analytics/next';
export default function Home() {
  return (
    <div>
      
      <Landing />
      <LandingClinic />
      <Threesteps />
      <TherapiesOffered />
      <ServiceOffered />
      <FindbySymptom />
      <FindbyCondition />
      <PatientReviewsPage />
      <OurLocation />
      <Faq />
      <Locations />
      <Analytics />
    </div>
  );
}
