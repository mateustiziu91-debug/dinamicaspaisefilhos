import { Clock, Cross, MessageCircle, CalendarCheck } from "lucide-react";
import CTAButton from "./CTAButton";

const bonuses = [
  {
    icon: Clock,
    title: "Atividades de 10 Minutos",
    desc: "Perfeito para dias corridos. Aproxime-se do seu filho mesmo com pouco tempo.",
    value: "R$37",
  },
  {
    icon: Cross,
    title: "30 Dinâmicas Cristãs",
    desc: "Com versículo, reflexão e aplicação prática para famílias de fé.",
    value: "R$47",
  },
  {
    icon: MessageCircle,
    title: "Guia de Conversas que Criam Confiança",
    desc: "Como falar sobre escola, amigos, internet e conflitos sem afastar seu filho.",
    value: "R$37",
  },
  {
    icon: CalendarCheck,
    title: "Desafio 30 Dias de Reconexão",
    desc: "Um plano passo a passo para restaurar o vínculo em 1 mês.",
    value: "R$47",
  },
];

const BonusSection = () => (
  <section className="py-14 px-4 bg-background">
    <div className="container max-w-2xl mx-auto text-center">
      <h2 className="font-heading text-2xl md:text-3xl font-black mb-1">
        Bônus Exclusivos
      </h2>
      <p className="text-muted-foreground text-sm mb-1">
        Valor Total: <span className="text-urgency font-bold line-through">R$168</span>
      </p>
      <p className="text-primary font-extrabold text-xl mb-8">(Hoje Grátis!)</p>

      <div className="space-y-4 mb-8">
        {bonuses.map((b, i) => (
          <div
            key={i}
            className="relative bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/15 rounded-2xl p-5 flex items-start gap-4 text-left shadow-sm"
          >
            <div className="bg-secondary/12 w-11 h-11 rounded-full flex items-center justify-center shrink-0 mt-0.5">
              <b.icon className="w-5 h-5 text-secondary" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-0.5">
                <h3 className="font-heading font-bold text-foreground text-sm">{b.title}</h3>
                <span className="text-urgency font-bold text-xs line-through">{b.value}</span>
              </div>
              <p className="text-muted-foreground text-xs leading-relaxed">{b.desc}</p>
            </div>
            <span className="bg-primary text-primary-foreground text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0">GRÁTIS</span>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border-2 border-primary/25 rounded-2xl py-3 px-5 inline-block mb-8">
        <p className="font-bold text-foreground text-sm">
          Total em Bônus: <span className="text-urgency line-through">R$168</span>{" "}
          <span className="text-primary text-lg font-black">GRÁTIS HOJE!</span>
        </p>
      </div>

      <div className="block">
        <CTAButton />
      </div>
    </div>
  </section>
);

export default BonusSection;
