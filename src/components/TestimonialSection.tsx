import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState, useCallback, useRef } from "react";
import camilaImg from "@/assets/testimonial-camila.jpg";
import rafaelImg from "@/assets/testimonial-rafael.jpg";
import julianaImg from "@/assets/testimonial-juliana.jpg";

const testimonials = [
  {
    name: "Camila Souza",
    role: "Mãe de 2 filhos",
    location: "São Paulo, SP",
    text: "Meu filho de 9 anos começou a me procurar pra fazer as dinâmicas! Nunca imaginei que algo tão simples faria tanta diferença. Agora toda noite ele pede: 'mãe, vamos fazer aquele jogo?' 🥹",
    time: "09:42",
    img: camilaImg,
    style: "whatsapp" as const,
  },
  {
    name: "Rafael Oliveira",
    role: "Pai de pré-adolescente",
    location: "Rio de Janeiro, RJ",
    text: "Achei que meu filho estava distante demais. Depois de uma semana usando o Sistema Reconectar, ele voltou a conversar sobre o dia dele. Pela primeira vez em meses ele disse 'te amo, pai' do nada.",
    time: "14:15",
    img: rafaelImg,
    style: "instagram" as const,
  },
  {
    name: "Juliana Martins",
    role: "Mãe solo",
    location: "Belo Horizonte, MG",
    text: "Com tão pouco tempo, essas atividades salvaram nossos fins de semana. Minha filha até conta pros amiguinhos das brincadeiras que fazemos juntas! ❤️ O Sistema Reconectar mudou nossa rotina.",
    time: "20:30",
    img: julianaImg,
    style: "whatsapp" as const,
  },
  {
    name: "Fernanda Lima",
    role: "Mãe de 3 filhos",
    location: "Curitiba, PR",
    text: "Comprei sem muita expectativa por R$10… e foi o melhor investimento que já fiz na minha família. Meus filhos brigam menos e se conectam mais. Vale cada centavo! 💛",
    time: "11:08",
    img: camilaImg,
    style: "instagram" as const,
  },
  {
    name: "Marcos Pereira",
    role: "Pai de gêmeos",
    location: "Salvador, BA",
    text: "Eu trabalhava o dia todo e chegava sem energia. Com as atividades de 10 minutos, consigo dar atenção de qualidade pros meus filhos mesmo cansado. Eles ficam tão felizes! 💪",
    time: "18:55",
    img: rafaelImg,
    style: "whatsapp" as const,
  },
  {
    name: "Ana Carolina Silva",
    role: "Mãe de adolescente",
    location: "Brasília, DF",
    text: "Minha filha de 13 anos vivia no celular e mal falava comigo. Comecei o Desafio 30 Dias e em 2 semanas ela mesma veio me chamar pra conversar. Estou emocionada com a transformação! 🙏",
    time: "16:22",
    img: julianaImg,
    style: "instagram" as const,
  },
];

const WhatsAppScreen = ({ t }: { t: typeof testimonials[0] }) => (
  <div className="bg-[#efeae2] rounded-2xl overflow-hidden shadow-lg border border-border/50 mx-auto max-w-[320px]">
    {/* WhatsApp header */}
    <div className="bg-[#075e54] px-3 py-2.5 flex items-center gap-2.5">
      <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
      <img src={t.img} alt={t.name} className="w-8 h-8 rounded-full object-cover border-2 border-white/20" />
      <div className="flex-1 min-w-0">
        <p className="text-white text-xs font-bold truncate">{t.name}</p>
        <p className="text-white/60 text-[9px]">online</p>
      </div>
    </div>
    {/* Message */}
    <div className="p-3 min-h-[160px] flex flex-col justify-center">
      <div className="bg-white rounded-xl rounded-tl-sm p-3 shadow-sm relative max-w-[95%]">
        <div className="absolute -top-0.5 -left-1 w-2.5 h-2.5 bg-white rotate-45" />
        <p className="text-foreground text-[13px] leading-relaxed">{t.text}</p>
        <div className="flex items-center justify-end gap-1 mt-1.5">
          <span className="text-[9px] text-muted-foreground">{t.time}</span>
          <span className="text-[#53bdeb] text-[10px]">✓✓</span>
        </div>
      </div>
    </div>
    {/* Footer info */}
    <div className="bg-white/80 px-3 py-2 flex items-center gap-2 border-t border-border/30">
      <div className="flex">
        {Array(5).fill(0).map((_, j) => (
          <Star key={j} className="w-3 h-3 fill-warm text-warm" />
        ))}
      </div>
      <span className="text-[10px] text-muted-foreground">{t.role} • {t.location}</span>
    </div>
  </div>
);

const InstagramScreen = ({ t }: { t: typeof testimonials[0] }) => (
  <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-border/50 mx-auto max-w-[320px]">
    {/* Instagram header */}
    <div className="px-3 py-2.5 flex items-center gap-2.5 border-b border-border/50">
      <img src={t.img} alt={t.name} className="w-8 h-8 rounded-full object-cover ring-2 ring-pink-400/50" />
      <div className="flex-1 min-w-0">
        <p className="font-bold text-foreground text-xs truncate">{t.name}</p>
        <p className="text-[9px] text-muted-foreground">{t.location}</p>
      </div>
      <span className="text-muted-foreground text-lg">⋯</span>
    </div>
    {/* Content */}
    <div className="p-3 min-h-[160px] flex flex-col justify-center">
      <p className="text-foreground text-[13px] leading-relaxed">{t.text}</p>
    </div>
    {/* Footer */}
    <div className="px-3 py-2 border-t border-border/50 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <span className="text-red-500 text-base">♥</span>
        <span className="text-muted-foreground text-base">💬</span>
        <span className="text-muted-foreground text-base">📤</span>
      </div>
      <div className="flex items-center gap-1.5">
        <div className="flex">
          {Array(5).fill(0).map((_, j) => (
            <Star key={j} className="w-3 h-3 fill-warm text-warm" />
          ))}
        </div>
        <span className="text-[10px] text-muted-foreground">{t.role}</span>
      </div>
    </div>
  </div>
);

const TestimonialSection = () => {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((idx: number) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrent(idx);
      setIsTransitioning(false);
    }, 200);
  }, []);

  const next = useCallback(() => {
    goTo((current + 1) % testimonials.length);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + testimonials.length) % testimonials.length);
  }, [current, goTo]);

  // Auto-scroll continuously
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrent(c => {
        const nextIdx = (c + 1) % testimonials.length;
        setIsTransitioning(true);
        setTimeout(() => setIsTransitioning(false), 200);
        return nextIdx;
      });
    }, 3500);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

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
        <div className="relative">
          <div
            className={`transition-opacity duration-200 ${isTransitioning ? "opacity-0" : "opacity-100"}`}
          >
            {t.style === "whatsapp" ? (
              <WhatsAppScreen t={t} />
            ) : (
              <InstagramScreen t={t} />
            )}
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 bg-card border border-border rounded-full p-1.5 shadow-sm hover:bg-muted transition-colors z-10"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-4 h-4 text-foreground" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 bg-card border border-border rounded-full p-1.5 shadow-sm hover:bg-muted transition-colors z-10"
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
              onClick={() => goTo(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === current ? "bg-secondary w-5" : "bg-border"
              }`}
              aria-label={`Depoimento ${i + 1}`}
            />
          ))}
        </div>

        <p className="text-muted-foreground text-xs mt-6">
          ⭐ Avaliação média: <span className="font-bold text-foreground">4.9/5</span> — baseado em depoimentos reais
        </p>
      </div>
    </section>
  );
};

export default TestimonialSection;
