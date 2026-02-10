import { motion } from "framer-motion";
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
  <section className="py-12 px-4 bg-background">
    <div className="container max-w-2xl mx-auto text-center">
      <h2 className="font-display text-2xl md:text-3xl mb-1">
        Bônus Exclusivos –{" "}
        <span className="text-urgency">Valor R$168</span>
      </h2>
      <p className="text-primary font-bold text-xl mb-8">(Hoje Grátis!)</p>

      <div className="grid gap-5 mb-8">
        {bonuses.map((b, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-muted border-2 border-primary/20 rounded-2xl p-6 text-center"
          >
            <div className="bg-secondary/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3">
              <b.icon className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="font-bold text-foreground mb-1">{b.title}</h3>
            <p className="text-urgency font-bold text-sm line-through mb-1">{b.value}</p>
            <p className="text-muted-foreground text-sm">{b.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="bg-cta/10 border-2 border-cta rounded-2xl p-5">
        <p className="font-bold text-foreground">
          Total em Bônus: <span className="text-urgency line-through">R$168</span>{" "}
          <span className="text-primary text-xl font-extrabold">GRÁTIS HOJE!</span>
        </p>
      </div>
    </div>
  </section>
);

export default BonusSection;
