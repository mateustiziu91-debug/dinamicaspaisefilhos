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
  <section id="oferta" className="py-14 px-4 bg-background">
    <div className="container max-w-md mx-auto">
      <CountdownTimer />

      <div className="mt-6 bg-white rounded-3xl border-2 border-primary/40 shadow-[0_8px_40px_hsl(152_55%_45%/0.12)] p-6 text-center relative overflow-hidden">
        {/* Ribbon */}
        <div className="bg-secondary text-secondary-foreground text-[11px] font-bold px-5 py-1 rounded-full inline-block mb-5">
          MAIS POPULAR
        </div>

        <h3 className="font-bold text-xl mb-3">Plano Completo</h3>

        <p className="text-muted-foreground text-sm line-through leading-none">De R$97</p>
        <p className="text-[2.5rem] font-black text-primary leading-none mb-0.5">R$17,90</p>
        <p className="text-xs text-muted-foreground mb-0.5">pagamento único</p>
        <p className="text-xs text-primary font-bold mb-6">
          Você economiza R$79,10 + R$168 em bônus
        </p>

        <div className="bg-muted/60 rounded-xl p-3 mb-4 text-left">
          <p className="text-[11px] text-muted-foreground text-center mb-2">
            +1.200 pais já escolheram essa oferta
          </p>
        </div>

        <div className="text-left space-y-2.5 mb-6">
          {included.map((item, i) => (
            <div key={i} className="flex items-center gap-2.5">
              <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Check className="w-3 h-3 text-primary" />
              </div>
              <span className="text-sm text-foreground">{item}</span>
            </div>
          ))}
        </div>

        <a
          href="#"
          className="group flex items-center justify-center gap-2 bg-cta text-cta-foreground font-extrabold text-base w-full py-4 rounded-full shadow-[0_4px_20px_hsl(152_65%_42%/0.35)] animate-pulse-grow cursor-pointer transition-all hover:brightness-110 active:scale-95"
        >
          <ShoppingCart className="w-5 h-5" />
          QUERO COMPRAR!
        </a>

        <p className="text-[11px] text-muted-foreground mt-3">
          ✅ Acesso imediato após a compra
        </p>
      </div>
    </div>
  </section>
);

export default OfferSection;
