import { Clock, Cross, MessageCircle, CalendarCheck } from "lucide-react";

const bonuses = [
  {
    icon: Clock,
    title: "Atividades de 10 Minutos Para Aproximar Você do Seu Filho",
    desc: "Perfeito para dias corridos.",
    value: "R$37",
  },
  {
    icon: Cross,
    title: "30 Dinâmicas Cristãs Para Unir Pais e Filhos",
    desc: "Com versículo, reflexão e aplicação prática.",
    value: "R$47",
  },
  {
    icon: MessageCircle,
    title: "Guia de Conversas que Criam Confiança",
    desc: "Como falar sobre escola, amigos, internet, medos e conflitos sem afastar seu filho.",
    value: "R$37",
  },
  {
    icon: CalendarCheck,
    title: "Desafio 30 Dias de Reconexão Real",
    desc: "Um plano simples para restaurar o vínculo passo a passo.",
    value: "R$47",
  },
];

const BonusSection = () => (
  <section className="py-14 px-4 bg-background">
    <div className="container max-w-2xl mx-auto text-center">
      <h2 className="font-display text-2xl md:text-3xl font-black mb-1">
        Bônus Exclusivos
      </h2>
      <p className="text-sm text-muted-foreground mb-1">
        Valor Total: <span className="text-urgency font-bold line-through">R$168</span>
      </p>
      <p className="text-primary font-extrabold text-xl mb-8">(Hoje Grátis!)</p>

      <div className="space-y-4 mb-8">
        {bonuses.map((b, i) => (
          <div
            key={i}
            className="relative bg-gradient-to-br from-muted to-white border-2 border-primary/15 rounded-2xl p-5 text-center shadow-sm"
          >
            <div className="bg-secondary/15 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
              <b.icon className="w-5 h-5 text-secondary" />
            </div>
            <h3 className="font-bold text-foreground text-sm mb-1 leading-snug">{b.title}</h3>
            <p className="text-urgency font-bold text-xs line-through mb-1">{b.value}</p>
            <p className="text-muted-foreground text-xs">{b.desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border-2 border-primary/30 rounded-2xl p-4 inline-block">
        <p className="font-bold text-foreground text-sm">
          Total em Bônus: <span className="text-urgency line-through">R$168</span>{" "}
          <span className="text-primary text-lg font-black">GRÁTIS HOJE!</span>
        </p>
      </div>
    </div>
  </section>
);

export default BonusSection;
