import { ShoppingCart } from "lucide-react";

const CTAButton = ({ text = "QUERO ACESSO IMEDIATO!", className = "" }: { text?: string; className?: string }) => (
  <a
    href="#oferta"
    className={`group relative inline-flex items-center justify-center gap-2.5 bg-cta text-cta-foreground font-extrabold text-base md:text-lg px-8 py-4 rounded-full shadow-[0_4px_20px_hsl(152_65%_42%/0.35)] animate-pulse-grow cursor-pointer transition-all hover:brightness-110 active:scale-95 ${className}`}
  >
    <ShoppingCart className="w-5 h-5" />
    {text}
  </a>
);

export default CTAButton;
