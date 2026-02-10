import HeroSection from "@/components/HeroSection";
import WhatYouGetSection from "@/components/WhatYouGetSection";
import BonusSection from "@/components/BonusSection";
import OfferSection from "@/components/OfferSection";
import TestimonialSection from "@/components/TestimonialSection";
import AuthorSection from "@/components/AuthorSection";
import FAQSection from "@/components/FAQSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import FinalCTA from "@/components/FinalCTA";
import ScrollReveal from "@/components/ScrollReveal";

const Index = () => (
  <main className="min-h-screen overflow-x-hidden">
    <HeroSection />
    <ScrollReveal><WhatYouGetSection /></ScrollReveal>
    <ScrollReveal><BonusSection /></ScrollReveal>
    <ScrollReveal><OfferSection /></ScrollReveal>
    <ScrollReveal><TestimonialSection /></ScrollReveal>
    <ScrollReveal><AuthorSection /></ScrollReveal>
    <ScrollReveal><FAQSection /></ScrollReveal>
    <ScrollReveal><GuaranteeSection /></ScrollReveal>
    <ScrollReveal><FinalCTA /></ScrollReveal>
    <footer className="bg-foreground text-white/40 text-center py-6 px-4 text-xs">
      <p>© {new Date().getFullYear()} Conexão em Pouco Tempo. Todos os direitos reservados.</p>
    </footer>
  </main>
);

export default Index;
