import { BookOpen, Moon, Gamepad2, Ear, MessageCircleQuestion, ShieldCheck, CalendarHeart } from "lucide-react";
import CTAButton from "./CTAButton";

const features = [
  { icon: BookOpen, text: "Dinâmicas de 5 a 15 minutos" },
  { icon: Moon, text: "Atividades para antes de dormir" },
  { icon: Gamepad2, text: "Jogos rápidos de conexão" },
  { icon: Ear, text: "Exercícios de escuta ativa" },
  { icon: MessageCircleQuestion, text: "Perguntas que fazem seu filho se abrir" },
  { icon: ShieldCheck, text: "Dinâmicas para resolver conflitos" },
  { icon: CalendarHeart, text: "Momentos especiais de fim de semana" },
];

const SolutionSection = () => (
  <section className="py-14 px-4 bg-background">
    <div className="container max-w-2xl mx-auto text-center">
      <p className="text-muted-foreground text-sm font-medium mb-1">Foi por isso que criamos:</p>
      <h2 className="font-display text-2xl md:text-3xl font-black mb-1">
        📘 Conexão em Pouco Tempo
      </h2>
      <p className="text-primary font-bold text-base md:text-lg mb-2">
        80+ Dinâmicas Prontas Para Aproximar Pais e Filhos
      </p>
      <p className="text-muted-foreground text-sm mb-10 max-w-md mx-auto">
        Direto ao ponto, prático e fácil de aplicar. Sem teoria. Sem psicologês. Sem enrolação.
      </p>

      <h3 className="font-bold text-lg md:text-xl mb-1">O Que Você Vai Receber</h3>
      <div className="w-10 h-1 bg-primary mx-auto rounded-full mb-6" />

      <div className="grid sm:grid-cols-2 gap-3 mb-10">
        {features.map((f, i) => (
          <div
            key={i}
            className="bg-muted rounded-xl p-4 flex items-center gap-3 border border-border shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="bg-secondary/15 p-2.5 rounded-full shrink-0">
              <f.icon className="w-5 h-5 text-secondary" />
            </div>
            <p className="text-foreground font-medium text-sm text-left">{f.text}</p>
          </div>
        ))}
      </div>

      <p className="text-xs text-muted-foreground mb-6">Tudo organizado por situação e objetivo.</p>
      <CTAButton />
    </div>
  </section>
);

export default SolutionSection;
