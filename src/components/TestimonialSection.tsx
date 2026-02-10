import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Camila Souza",
    role: "Mãe de 2 filhos - SP",
    text: "Meu filho de 9 anos começou a me procurar pra fazer as dinâmicas! Nunca imaginei que algo tão simples faria tanta diferença.",
    initials: "CS",
  },
  {
    name: "Rafael Oliveira",
    role: "Pai de pré-adolescente - RJ",
    text: "Achei que meu filho estava distante demais. Depois de uma semana usando o guia, ele voltou a conversar sobre o dia dele. Emocionante.",
    initials: "RO",
  },
  {
    name: "Juliana Martins",
    role: "Mãe solo - MG",
    text: "Com tão pouco tempo, essas atividades salvaram nossos fins de semana. Agora temos nossos momentos especiais toda semana.",
    initials: "JM",
  },
];

const TestimonialSection = () => (
  <section className="py-14 px-4 bg-background">
    <div className="container max-w-3xl mx-auto text-center">
      <h2 className="font-heading text-2xl md:text-3xl font-black mb-1">O Que Os Pais Dizem</h2>
      <div className="w-10 h-1 bg-primary mx-auto rounded-full mb-8" />

      <div className="grid md:grid-cols-3 gap-4">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-muted rounded-2xl border border-border p-5 text-left shadow-sm"
          >
            <div className="flex gap-0.5 mb-3">
              {Array(5).fill(0).map((_, j) => (
                <Star key={j} className="w-3.5 h-3.5 fill-warm text-warm" />
              ))}
            </div>
            <p className="text-xs text-foreground mb-4 leading-relaxed italic">"{t.text}"</p>
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-xs font-bold">
                {t.initials}
              </div>
              <div>
                <p className="font-bold text-foreground text-xs">{t.name}</p>
                <p className="text-[11px] text-muted-foreground">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialSection;
