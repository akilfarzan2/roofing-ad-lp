import { Hero } from "@/components/Hero";
import { QuickProof } from "@/components/QuickProof";
import { Proof } from "@/components/Proof";
import { DeepProcess } from "@/components/DeepProcess";
import { PriceCluster } from "@/components/PriceCluster";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <QuickProof />
      <Proof />
      <DeepProcess />
      <PriceCluster />
      <Faq />
      <Footer />
    </main>
  );
}
