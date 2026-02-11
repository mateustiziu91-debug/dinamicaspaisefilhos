import CTAButton from "./CTAButton";
import bonusAtividades from "@/assets/bonus-atividades-10min.jpg";
import bonusCristas from "@/assets/bonus-dinamicas-cristas.jpg";
import bonusConversas from "@/assets/bonus-guia-conversas.jpg";
import bonusDesafio from "@/assets/bonus-desafio-30dias.jpg";

const bonuses = [
  {
    image: bonusAtividades,
    title: "Atividades de 10 Minutos",
    desc: "Perfeito para dias corridos. Aproxime-se do seu filho mesmo com pouco tempo.",
    value: "R$37",
  },
  {
    image: bonusCristas,
    title: "30 Dinâmicas Cristãs",
    desc: "Com versículo, reflexão e aplicação prática para famílias de fé.",
    value: "R$47",
  },
  {
    image: bonusConversas,
    title: "Guia de Conversas que Criam Confiança",
    desc: "Como falar sobre escola, amigos, internet e conflitos sem afastar seu filho.",
    value: "R$37",
  },
  {
    image: bonusDesafio,
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
            className="relative bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/15 rounded-2xl p-4 text-left shadow-sm"
          >
            <div className="flex items-start gap-4">
              <img
                src={b.image}
                alt={b.title}
                className="w-20 h-[106px] object-cover rounded-xl shadow-md shrink-0"
              />
              <div className="flex-1 min-w-0">
                <h3 className="font-heading font-bold text-foreground text-sm leading-tight">{b.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed mt-1">{b.desc}</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-urgency font-bold text-xs line-through">{b.value}</span>
                  <span className="bg-primary text-primary-foreground text-[10px] font-bold px-2.5 py-0.5 rounded-full">GRÁTIS</span>
                </div>
              </div>
            </div>
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
