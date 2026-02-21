import { Star, MessageCircle, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState, useCallback } from "react";
import camilaImg from "@/assets/testimonial-camila.jpg";
import rafaelImg from "@/assets/testimonial-rafael.jpg";
import julianaImg from "@/assets/testimonial-juliana.jpg";

const testimonials = [
  {
    name: "Camila Souza",
    role: "Mãe de 2 filhos",
    location: "São Paulo, SP",
    text: "Meu filho de 9 anos começou a me procurar pra fazer as dinâmicas! Nunca imaginei que algo tão simples faria tanta diferença. Agora toda noite ele pede: 'mãe, vamos fazer aquele jogo?' 🥹",
    highlight: "Resultado em menos de 1 semana",
    img: camilaImg,
    style: "whatsapp" as const,
  },
  {
    name: "Rafael Oliveira",
    role: "Pai de pré-adolescente",
    location: "Rio de Janeiro, RJ",
    text: "Achei que meu filho estava distante demais. Depois de uma semana usando o guia, ele voltou a conversar sobre o dia dele. Emocionante. Pela primeira vez em meses ele disse 'te amo, pai' do nada.",
    highlight: "Reconexão real com o filho",
    img: rafaelImg,
    style: "instagram" as const,
  },
  {
    name: "Juliana Martins",
    role: "Mãe solo",
    location: "Belo Horizonte, MG",
    text: "Com tão pouco tempo, essas atividades salvaram nossos fins de semana. Agora temos nossos momentos especiais toda semana. Minha filha até conta pros amiguinhos das brincadeiras que fazemos juntas! ❤️",
    highlight: "Perfeito pra rotina corrida",
    img: julianaImg,
    style: "whatsapp" as const,
  },
  {
    name: "Fernanda Lima",
    role: "Mãe de 3 filhos",
    location: "Curitiba, PR",
    text: "Comprei sem muita expectativa por R$10… e foi o melhor investimento que já fiz na minha família. Cada dinâmica é pensada com tanto carinho. Meus filhos brigam menos e se conectam mais. Vale cada centavo! 💛",
    highlight: "Melhor custo-benefício",
    img: camilaImg,
    style: "instagram" as const,
  },
  {
    name: "Marcos Pereira",
    role: "Pai de gêmeos",
    location: "Salvador, BA",
    text: "Eu trabalhava o dia todo e chegava sem energia. Com as atividades de 10 minutos, consigo dar atenção de qualidade pros meus filhos mesmo cansado. Eles ficam tão felizes que me dá mais energia! 💪",
    highlight: "Funciona mesmo com pouco tempo",
    img: rafaelImg,
    style: "whatsapp" as const,
  },
];

const WhatsAppBubble = ({ t }: { t: typeof testimonials[0] }) => (
  <div className="bg-[#e7feed] rounded-2xl rounded-tl-sm p-4 shadow-sm border border-[#c6e8c6]/50 relative max-w-[90%] mx-auto">
    <div className="absolute -top-0.5 -left-1.5 w-3 h-3 bg-[#e7feed] rotate-45" />
    <p className="text-foreground text-sm leading-relaxed">{t.text}</p>
    <div className="flex items-center justify-end gap-1 mt-1">
      <span className="text-[10px] text-muted-foreground">09:42</span>
      <span className="text-primary text-xs">✓✓</span>
    </div>
  </div>
);

const InstagramCard = ({ t }: { t: typeof testimonials[0] }) => (
  <div className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden">
    <div className="flex items-center gap-2.5 px-4 py-3 border-b border-border">
      <img src={t.img} alt={t.name} className="w-8 h-8 rounded-full object-cover ring-2 ring-primary/30" />
      <div>
        <p className="font-bold text-foreground text-xs">{t.name}</p>
        <p className="text-[10px] text-muted-foreground">{t.location}</p>
      </div>
    </div>
    <div className="px-4 py-3">
      <p className="text-foreground text-sm leading-relaxed">{t.text}</p>
    </div>
    <div className="flex items-center gap-3 px-4 py-2 border-t border-border">
      <span className="text-primary text-lg">♥</span>
      <MessageCircle className="w-4 h-4 text-muted-foreground" />
    </div>
  </div>
);

const TestimonialSection = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 4000);
    return () => clearInterval(id);
  }, [paused, next]);

  const t = testimonials[current];

  return (
    <section className="py-14 px-4 bg-muted/50">
      <div className="container max-w-lg mx-auto text-center">
        <p className="text-secondary text-xs font-bold tracking-widest uppercase mb-2">
          +1.200 famílias transformadas
        </p>
        <h2 className="font-heading text-2xl md:text-3xl font-black mb-2">
          Veja O Que Os Pais Dizem
        </h2>
        <div className="flex justify-center gap-0.5 mb-6">
          {Array(5).fill(0).map((_, j) => (
            <Star key={j} className="w-4 h-4 fill-warm text-warm" />
          ))}
        </div>

        {/* Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => setPaused(false)}
        >
          {/* Highlight badge */}
          <div className="inline-flex items-center gap-1.5 bg-secondary/10 text-secondary text-[11px] font-bold px-3 py-1 rounded-full mb-4">
            <Quote className="w-3 h-3" />
            {t.highlight}
          </div>

          {/* Card */}
          <div className="min-h-[220px] flex items-center justify-center">
            <div className="w-full animate-fade-in" key={current}>
              {t.style === "whatsapp" ? (
                <WhatsAppBubble t={t} />
              ) : (
                <InstagramCard t={t} />
              )}
            </div>
          </div>

          {/* Author info (for WhatsApp style) */}
          {t.style === "whatsapp" && (
            <div className="flex items-center justify-center gap-2.5 mt-4">
              <img src={t.img} alt={t.name} className="w-10 h-10 rounded-full object-cover ring-2 ring-primary/20" />
              <div className="text-left">
                <p className="font-bold text-foreground text-xs">{t.name}</p>
                <p className="text-[11px] text-muted-foreground">{t.role} • {t.location}</p>
              </div>
            </div>
          )}

          {/* Navigation arrows */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 bg-card border border-border rounded-full p-1.5 shadow-sm hover:bg-muted transition-colors"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-4 h-4 text-foreground" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 bg-card border border-border rounded-full p-1.5 shadow-sm hover:bg-muted transition-colors"
            aria-label="Próximo"
          >
            <ChevronRight className="w-4 h-4 text-foreground" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-1.5 mt-5">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === current ? "bg-secondary w-5" : "bg-border"
              }`}
              aria-label={`Depoimento ${i + 1}`}
            />
          ))}
        </div>

        {/* Social proof */}
        <p className="text-muted-foreground text-xs mt-6">
          ⭐ Avaliação média: <span className="font-bold text-foreground">4.9/5</span> — baseado em depoimentos reais
        </p>
      </div>
    </section>
  );
};

export default TestimonialSection;
