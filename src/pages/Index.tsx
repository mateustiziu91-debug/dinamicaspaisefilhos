import HeroSection from "@/components/HeroSection";
import WhatYouGetSection from "@/components/WhatYouGetSection";
import BonusSection from "@/components/BonusSection";
import OfferSection from "@/components/OfferSection";
import TestimonialSection from "@/components/TestimonialSection";
import AuthorSection from "@/components/AuthorSection";
import FAQSection from "@/components/FAQSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import FinalCTA from "@/components/FinalCTA";

const Index = () => (
  <main className="min-h-screen overflow-x-hidden">
    <HeroSection />
    <WhatYouGetSection />
    <BonusSection />
    <OfferSection />
    <TestimonialSection />
    <AuthorSection />
    <FAQSection />
    <GuaranteeSection />
    <FinalCTA />
    <footer className="bg-foreground text-white/40 text-center py-6 px-4 text-xs">
      <p>© {new Date().getFullYear()} Conexão em Pouco Tempo. Todos os direitos reservados.</p>
    </footer>
  </main>
);

export default Index;
