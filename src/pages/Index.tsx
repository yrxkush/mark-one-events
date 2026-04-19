import { Hero } from "@/components/landing/Hero";
import { Services } from "@/components/landing/Services";
import { Stats } from "@/components/landing/Stats";
import { Features } from "@/components/landing/Features";
import { Premium } from "@/components/landing/Premium";
import { Brands } from "@/components/landing/Brands";
import { Download } from "@/components/landing/Download";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Services />
      <Stats />
      <Features />
      <Premium />
      <Brands />
      <Download />
      <Footer />
    </main>
  );
};

export default Index;
