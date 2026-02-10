import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Camila Souza",
    role: "Mãe de 2 filhos - SP",
    text: "Meu filho de 9 anos começou a me procurar pra fazer as dinâmicas! Nunca imaginei que algo tão simples faria tanta diferença.",
  },
  {
    name: "Rafael Oliveira",
    role: "Pai de pré-adolescente - RJ",
    text: "Achei que meu filho estava distante demais. Depois de uma semana usando o guia, ele voltou a conversar sobre o dia dele. Emocionante.",
  },
  {
    name: "Juliana Martins",
    role: "Mãe solo - MG",
    text: "Com tão pouco tempo, essas atividades salvaram nossos fins de semana. Agora temos nossos momentos especiais toda semana.",
  },
];

const TestimonialSection = () => (
  <section className="py-12 px-4 bg-muted">
    <div className="container max-w-3xl mx-auto text-center">
      <h2 className="font-display text-2xl md:text-3xl mb-2">
        O Que Os Pais Dizem
      </h2>
      <div className="w-12 h-1 bg-primary mx-auto mb-8 rounded-full" />

      <div className="grid md:grid-cols-3 gap-4">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card rounded-2xl border p-5 text-left shadow-sm"
          >
            <div className="flex gap-0.5 mb-3">
              {Array(5).fill(0).map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-highlight text-highlight" />
              ))}
            </div>
            <p className="text-sm text-foreground mb-4 italic">"{t.text}"</p>
            <div>
              <p className="font-bold text-foreground text-sm">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialSection;
