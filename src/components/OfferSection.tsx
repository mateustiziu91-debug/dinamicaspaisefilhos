import { useState } from "react";
import { Check, ShoppingCart, X } from "lucide-react";
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
  { text: "Acesso digital", included: true },
  { text: "Garantia de 7 dias", included: true },
  { text: "Sem os bônus exclusivos", included: false },
];

const premiumFeatures = [
  { text: "80+ Dinâmicas PDF", included: true },
  { text: "Organizadas por situação", included: true },
  { text: "Acesso digital", included: true },
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
      <div className="container max-w-2xl mx-auto">
        <CountdownTimer />

        <div className="grid md:grid-cols-2 gap-4 mt-8">
          {/* Basic */}
          <div className="bg-white rounded-3xl border border-border shadow-sm p-6 text-center">
            <h3 className="font-heading font-bold text-xl mb-3">Plano Básico</h3>
            <p className="text-muted-foreground text-sm line-through leading-none">De R$97</p>
            <p className="text-3xl font-bold text-foreground mb-0.5">R$10,00</p>
            <p className="text-xs text-muted-foreground mb-1">pagamento único</p>
            <p className="text-xs text-primary font-bold mb-5">Você economiza R$87,00</p>

            <div className="text-left space-y-2.5 mb-6">
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

            <button
              onClick={() => setShowPopup(true)}
              className="flex items-center justify-center gap-2 bg-cta text-cta-foreground font-extrabold text-sm w-full py-3.5 rounded-full shadow-md cursor-pointer hover:brightness-110 active:scale-95 transition-all"
            >
              <ShoppingCart className="w-4 h-4" />
              QUERO COMPRAR!
            </button>
          </div>

          {/* Premium */}
          <div className="bg-white rounded-3xl border-2 border-secondary shadow-[0_8px_40px_hsl(268_58%_58%/0.12)] p-6 text-center relative">
            <div className="bg-secondary text-secondary-foreground text-[10px] font-bold px-4 py-1 rounded-full inline-block mb-3">
              MAIS POPULAR
            </div>
            <h3 className="font-heading font-bold text-xl mb-3">Plano Premium</h3>
            <p className="text-muted-foreground text-sm line-through leading-none">De R$256</p>
            <p className="text-3xl font-bold text-secondary mb-0.5">R$17,90</p>
            <p className="text-xs text-muted-foreground mb-1">pagamento único</p>
            <p className="text-xs text-secondary font-bold mb-2">Você economiza R$238 + R$168 em bônus</p>

            <div className="bg-muted rounded-lg py-1.5 px-3 mb-5">
              <p className="text-[11px] text-muted-foreground">+1.200 pais já escolheram essa oferta</p>
            </div>

            <div className="text-left space-y-2.5 mb-6">
              {premiumFeatures.map((f, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  {f.bonus ? (
                    <span className="text-sm">🎁</span>
                  ) : (
                    <Check className="w-4 h-4 text-primary shrink-0" />
                  )}
                  <span className={`text-sm ${f.bonus ? "text-secondary font-semibold" : "text-foreground"}`}>{f.text}</span>
                </div>
              ))}
            </div>

            <a
              href="#"
              className="flex items-center justify-center gap-2 bg-cta text-cta-foreground font-extrabold text-sm w-full py-3.5 rounded-full shadow-[0_4px_20px_hsl(152_65%_42%/0.35)] animate-pulse-grow cursor-pointer hover:brightness-110 active:scale-95 transition-all"
            >
              <ShoppingCart className="w-4 h-4" />
              QUERO COMPRAR!
            </a>
          </div>
        </div>

        {/* Popup upsell when clicking Basic */}
        <Dialog open={showPopup} onOpenChange={setShowPopup}>
          <DialogContent className="max-w-md rounded-3xl p-6">
            <DialogHeader>
              <DialogTitle className="font-heading text-xl font-bold text-center">
                Espera! 🎁 Você Sabia?
              </DialogTitle>
              <DialogDescription className="text-center text-sm text-muted-foreground mt-2">
                Por apenas <strong className="text-secondary">R$7,90 a mais</strong>, você leva tudo do Plano Básico{" "}
                <strong className="text-foreground">+ 4 Bônus Exclusivos</strong> que valem R$168!
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-2 my-4">
              {["🎁 Atividades de 10 Minutos", "🎁 30 Dinâmicas Cristãs", "🎁 Guia de Conversas", "🎁 Desafio 30 Dias"].map((b, i) => (
                <div key={i} className="flex items-center gap-2 bg-muted rounded-lg px-3 py-2">
                  <span className="text-sm font-semibold text-secondary">{b}</span>
                </div>
              ))}
            </div>

            <div className="space-y-2">
              <a
                href="#"
                className="flex items-center justify-center gap-2 bg-cta text-cta-foreground font-extrabold text-sm w-full py-3.5 rounded-full shadow-md hover:brightness-110 active:scale-95 transition-all"
              >
                <ShoppingCart className="w-4 h-4" />
                QUERO O PREMIUM POR R$17,90!
              </a>
              <a
                href="#"
                className="block text-center text-xs text-muted-foreground underline hover:text-foreground transition-colors"
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
