import HeroSection from "@/components/HeroSection";
import PainSection from "@/components/PainSection";
import SolutionSection from "@/components/SolutionSection";
import AudienceSection from "@/components/AudienceSection";
import BonusSection from "@/components/BonusSection";
import EmotionalSection from "@/components/EmotionalSection";
import ObjectionSection from "@/components/ObjectionSection";
import TestimonialSection from "@/components/TestimonialSection";
import OfferSection from "@/components/OfferSection";
import FinalCTA from "@/components/FinalCTA";

const Index = () => (
  <main className="min-h-screen overflow-x-hidden">
    <HeroSection />
    <PainSection />
    <SolutionSection />
    <AudienceSection />
    <BonusSection />
    <EmotionalSection />
    <ObjectionSection />
    <TestimonialSection />
    <OfferSection />
    <FinalCTA />
    <footer className="bg-foreground text-white/40 text-center py-6 px-4 text-xs">
      <p>© {new Date().getFullYear()} Conexão em Pouco Tempo. Todos os direitos reservados.</p>
      <p className="mt-1">Este produto não substitui acompanhamento profissional.</p>
    </footer>
  </main>
);

export default Index;
