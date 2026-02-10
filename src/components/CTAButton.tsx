import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";

const CTAButton = ({ className = "" }: { className?: string }) => (
  <motion.a
    href="#oferta"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.97 }}
    className={`inline-flex items-center justify-center gap-2 bg-cta text-cta-foreground font-bold text-lg md:text-xl px-8 py-4 rounded-full shadow-lg animate-pulse-cta cursor-pointer ${className}`}
  >
    <ShoppingCart className="w-5 h-5" />
    QUERO AGORA!
  </motion.a>
);

export default CTAButton;
