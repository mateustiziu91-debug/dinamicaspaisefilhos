import { useState } from "react";
import { Check, ShoppingCart, X, Star, Gift, ArrowRight } from "lucide-react";
import CountdownTimer from "./CountdownTimer";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";

const basicFeatures = [
  { text: "80+ Dinâmicas PDF", included: true },
  { text: "Organizadas por situação", included: true },
  { text: "Acesso digital imediato", included: true },
  { text: "Garantia de 7 dias", included: true },
  { text: "Sem os bônus exclusivos", included: false },
];

const premiumFeatures = [
  { text: "80+ Dinâmicas PDF", included: true },
  { text: "Organizadas por situação", included: true },
  { text: "Acesso digital imediato", included: true },
  { text: "BÔNUS: Atividades de 10 Min", included: true, bonus: true },
  { text: "BÔNUS: 30 Dinâmicas Cristãs", included: true, bonus: true },
  { text: "BÔNUS: Guia de Conversas", included: true, bonus: true },
  { text: "BÔNUS: Desafio 30 Dias", included: true, bonus: true },
  { text: "Garantia de 7 dias", included: true },
];

const OfferSection = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <section id="oferta" className="py-14 px-4 bg-muted">
      <div className="container max-w-md mx-auto">
        <CountdownTimer />

        <div className="flex flex-col gap-4 mt-8">
          {/* Premium - FIRST on mobile */}
          <div className="bg-white rounded-3xl border-2 border-secondary shadow-[0_8px_40px_hsl(268_58%_58%/0.15)] p-5 text-center relative overflow-hidden">
            {/* Ribbon */}
            <div className="bg-secondary text-secondary-foreground text-[10px] font-bold px-5 py-1.5 rounded-full inline-block mb-3">
              ⭐ MAIS ESCOLHIDO
            </div>

            <h3 className="font-heading font-bold text-xl mb-1">Plano Premium</h3>
            <p className="text-muted-foreground text-xs mb-3">Tudo incluso + 4 bônus exclusivos</p>

            <div className="bg-muted rounded-2xl py-4 px-3 mb-4">
              <p className="text-muted-foreground text-sm line-through leading-none mb-1">De R$256,00</p>
              <p className="text-4xl font-black text-secondary mb-0.5">R$17,90</p>
              <p className="text-xs text-muted-foreground">pagamento único</p>
              <div className="mt-2 inline-block bg-secondary/10 text-secondary text-xs font-bold px-3 py-1 rounded-full">
                Economize R$238 + R$168 em bônus
              </div>
            </div>

            <div className="bg-muted/50 rounded-xl py-2 px-3 mb-4">
              <p className="text-[11px] text-muted-foreground">
                ✅ +1.200 pais já escolheram essa oferta
              </p>
            </div>

            <div className="text-left space-y-2 mb-5">
              {premiumFeatures.map((f, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  {f.bonus ? (
                    <Gift className="w-4 h-4 text-secondary shrink-0" />
                  ) : (
                    <Check className="w-4 h-4 text-primary shrink-0" />
                  )}
                  <span className={`text-sm ${f.bonus ? "text-secondary font-semibold" : "text-foreground"}`}>{f.text}</span>
                </div>
              ))}
            </div>

            <a
              href="https://ggcheckout.com.br/checkout/v5/lehzbiappaSqrWX8VX0s"
              className="flex items-center justify-center gap-2 bg-cta text-cta-foreground font-extrabold text-sm w-full py-4 rounded-full shadow-[0_4px_20px_hsl(152_65%_42%/0.35)] animate-pulse-grow cursor-pointer hover:brightness-110 active:scale-95 transition-all"
            >
              <ShoppingCart className="w-5 h-5" />
              QUERO O PREMIUM!
            </a>
            <p className="text-[10px] text-muted-foreground mt-2">🔒 Pagamento 100% seguro</p>
          </div>

          {/* Basic */}
          <div className="bg-white rounded-3xl border border-border shadow-sm p-5 text-center opacity-90">
            <h3 className="font-heading font-bold text-lg mb-3">Plano Básico</h3>
            <p className="text-muted-foreground text-sm line-through leading-none">De R$97</p>
            <p className="text-2xl font-bold text-foreground mb-0.5">R$10,00</p>
            <p className="text-xs text-muted-foreground mb-1">pagamento único</p>
            <p className="text-xs text-primary font-bold mb-4">Você economiza R$87,00</p>

            <div className="text-left space-y-2 mb-5">
              {basicFeatures.map((f, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  {f.included ? (
                    <Check className="w-4 h-4 text-primary shrink-0" />
                  ) : (
                    <X className="w-4 h-4 text-urgency shrink-0" />
                  )}
                  <span className={`text-sm ${f.included ? "text-foreground" : "text-muted-foreground"}`}>{f.text}</span>
                </div>
              ))}
            </div>

            <a
              href="https://www.ggcheckout.com/checkout/v5/0WXgFXAbhlySK99UlqkI"
              className="flex items-center justify-center gap-2 bg-muted text-foreground font-bold text-sm w-full py-3 rounded-full border border-border cursor-pointer hover:bg-muted/80 active:scale-95 transition-all"
            >
              Quero o Básico
            </a>
          </div>
        </div>

        {/* Popup upsell */}
        <Dialog open={showPopup} onOpenChange={setShowPopup}>
          <DialogContent className="max-w-[92vw] sm:max-w-md rounded-3xl p-0 overflow-hidden border-0">
            {/* Header gradient */}
            <div className="bg-gradient-to-br from-secondary to-secondary/80 text-secondary-foreground p-5 pb-4 text-center">
              <DialogHeader>
                <DialogTitle className="font-heading text-xl font-black text-white">
                  Espera! 🎁 Oferta Especial
                </DialogTitle>
                <DialogDescription className="text-white/90 text-sm mt-2">
                  Por apenas <span className="font-black text-white text-base">R$7,90 a mais</span>, você leva:
                </DialogDescription>
              </DialogHeader>
            </div>

            <div className="p-5 pt-4">
              {/* Bonus list */}
              <div className="space-y-2.5 mb-5">
                {[
                  "Atividades de 10 Minutos",
                  "30 Dinâmicas Cristãs",
                  "Guia de Conversas",
                  "Desafio 30 Dias",
                ].map((b, i) => (
                  <div key={i} className="flex items-center gap-3 bg-muted rounded-xl px-4 py-3">
                    <Gift className="w-5 h-5 text-secondary shrink-0" />
                    <span className="text-sm font-bold text-foreground">{b}</span>
                    <span className="ml-auto text-xs text-muted-foreground line-through">R$42</span>
                  </div>
                ))}
              </div>

              {/* Value badge */}
              <div className="text-center mb-4">
                <div className="inline-block bg-secondary/10 text-secondary text-xs font-bold px-4 py-1.5 rounded-full">
                  💰 Valor total dos bônus: R$168 — <span className="text-foreground">GRÁTIS para você</span>
                </div>
              </div>

              {/* CTA */}
              <a
                href="https://ggcheckout.com.br/checkout/v5/lehzbiappaSqrWX8VX0s"
                className="flex items-center justify-center gap-2 bg-cta text-cta-foreground font-extrabold text-sm w-full py-4 rounded-full shadow-[0_4px_20px_hsl(152_65%_42%/0.35)] animate-pulse-grow cursor-pointer hover:brightness-110 active:scale-95 transition-all mb-2"
              >
                <ShoppingCart className="w-5 h-5" />
                SIM! QUERO O PREMIUM POR R$17,90
              </a>

              <a
                href="https://www.ggcheckout.com/checkout/v5/0WXgFXAbhlySK99UlqkI"
                className="block text-center text-xs text-muted-foreground underline hover:text-foreground transition-colors py-1"
              >
                Não, obrigado. Quero apenas o Básico por R$10,00
              </a>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default OfferSection;
