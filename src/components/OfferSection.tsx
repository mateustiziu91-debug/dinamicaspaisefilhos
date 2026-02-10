import { motion } from "framer-motion";
import { Check, ShoppingCart } from "lucide-react";
import CountdownTimer from "./CountdownTimer";

const included = [
  "80+ Dinâmicas de Conexão",
  "Organizadas por situação e objetivo",
  "Acesso digital imediato",
  "4 Bônus Exclusivos (valor R$168)",
  "Garantia de 7 dias",
];

const OfferSection = () => (
  <section id="oferta" className="py-12 px-4 bg-gradient-to-b from-background to-muted">
    <div className="container max-w-md mx-auto">
      <CountdownTimer />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-8 bg-card rounded-3xl border-2 border-primary shadow-xl p-6 text-center"
      >
        <p className="bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full inline-block mb-4">
          OFERTA ESPECIAL
        </p>
        <h3 className="font-display text-2xl mb-1">Plano Completo</h3>

        <p className="text-muted-foreground text-sm line-through">R$97</p>
        <p className="text-4xl font-extrabold text-primary mb-1">R$17,90</p>
        <p className="text-sm text-muted-foreground mb-1">pagamento único</p>
        <p className="text-xs text-primary font-semibold mb-6">
          Você economiza R$79,10 + R$168 em bônus
        </p>

        <div className="text-left space-y-3 mb-6">
          {included.map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <Check className="w-5 h-5 text-primary shrink-0" />
              <span className="text-sm text-foreground">{item}</span>
            </div>
          ))}
        </div>

        <motion.a
          href="#"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center justify-center gap-2 bg-cta text-cta-foreground font-bold text-lg w-full py-4 rounded-full shadow-lg cursor-pointer"
        >
          <ShoppingCart className="w-5 h-5" />
          QUERO COMPRAR!
        </motion.a>

        <p className="text-xs text-muted-foreground mt-3">
          Acesso imediato após a compra
        </p>
      </motion.div>
    </div>
  </section>
);

export default OfferSection;
