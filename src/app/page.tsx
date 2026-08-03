import { Hero } from "@/components/Hero";
import { MechanismGap } from "@/components/MechanismGap";
import { Proof } from "@/components/Proof";
import { DeepProcess } from "@/components/DeepProcess";
import { Calculator } from "@/components/Calculator";
import { AeoUrgency } from "@/components/AeoUrgency";
import { ComparisonTable } from "@/components/ComparisonTable";
import { PriceCluster } from "@/components/PriceCluster";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <MechanismGap />
      <Proof />
      <DeepProcess />
      <Calculator />
      <ComparisonTable />
      <AeoUrgency />
      <PriceCluster />
      <Faq />
      <Footer />
    </main>
  );
}
