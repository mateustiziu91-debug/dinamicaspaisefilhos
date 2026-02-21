import { Check, ShoppingCart, Gift } from "lucide-react";
import CountdownTimer from "./CountdownTimer";

const allFeatures = [
  { text: "+150 Atividades Guiadas em PDF", included: true },
  { text: "Organizadas por situação", included: true },
  { text: "Acesso digital imediato", included: true },
  { text: "BÔNUS: Atividades de 10 Minutos", included: true, bonus: true },
  { text: "BÔNUS: Desafio 30 Dias de Reconexão", included: true, bonus: true },
  { text: "BÔNUS: Guia de Conversas que Criam Confiança", included: true, bonus: true },
  { text: "BÔNUS: O Que Fazer Quando Seu Filho Te Ignora ou Se Afasta", included: true, bonus: true },
  { text: "BÔNUS: Erros Invisíveis que Afastam Seu Filho Sem Você Perceber", included: true, bonus: true },
  { text: "Garantia de 7 dias", included: true },
];

const OfferSection = () => {
  return (
    <section id="oferta" className="py-14 px-4 bg-muted">
      <div className="container max-w-md mx-auto">
        <CountdownTimer />

        <div className="mt-8">
          <div className="bg-white rounded-3xl border-2 border-secondary shadow-[0_8px_40px_hsl(200_60%_28%/0.15)] p-5 text-center relative overflow-hidden">
            <div className="bg-secondary text-secondary-foreground text-[10px] font-bold px-5 py-1.5 rounded-full inline-block mb-3">
              ⭐ OFERTA COMPLETA
            </div>

            <h3 className="font-heading font-bold text-xl mb-1">Sistema Reconectar em 10 Minutos</h3>
            <p className="text-muted-foreground text-xs mb-3">+150 atividades guiadas para restaurar a conexão com seu filho</p>

            <div className="bg-muted rounded-2xl py-4 px-3 mb-4">
              <p className="text-muted-foreground text-sm line-through leading-none mb-1">De R$97,00</p>
              <p className="text-4xl font-black text-secondary mb-0.5">R$10,00</p>
              <p className="text-xs text-muted-foreground">pagamento único</p>
              <div className="mt-2 inline-block bg-secondary/10 text-secondary text-xs font-bold px-3 py-1 rounded-full">
                Economize R$87 + R$205 em bônus grátis
              </div>
            </div>

            <div className="bg-muted/50 rounded-xl py-2 px-3 mb-4">
              <p className="text-[11px] text-muted-foreground">
                ✅ +1.200 pais já garantiram o acesso
              </p>
            </div>

            <div className="text-left space-y-2 mb-5">
              {allFeatures.map((f, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  {f.bonus ? (
                    <Gift className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                  ) : (
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  )}
                  <span className={`text-sm ${f.bonus ? "text-secondary font-semibold" : "text-foreground"}`}>{f.text}</span>
                </div>
              ))}
            </div>

            <a
              href="https://www.ggcheckout.com/checkout/v4/lehzbiappaSqrWX8VX0s"
              className="flex items-center justify-center gap-2 bg-cta text-cta-foreground font-extrabold text-sm w-full py-4 rounded-full shadow-[0_4px_20px_hsl(152_65%_42%/0.35)] animate-pulse-grow cursor-pointer hover:brightness-110 active:scale-95 transition-all"
            >
              <ShoppingCart className="w-5 h-5" />
              QUERO ACESSO IMEDIATO!
            </a>
            <p className="text-[10px] text-muted-foreground mt-2">🔒 Pagamento 100% seguro</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
