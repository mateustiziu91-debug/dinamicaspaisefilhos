import { motion } from "framer-motion";
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
  <section className="py-12 px-4 bg-gradient-to-b from-background to-muted">
    <div className="container max-w-2xl mx-auto text-center">
      <p className="text-sm text-muted-foreground mb-2">Foi por isso que criamos:</p>
      <h2 className="font-display text-2xl md:text-3xl mb-2">
        📘 Conexão em Pouco Tempo
      </h2>
      <p className="text-primary font-semibold text-lg mb-2">
        80+ Dinâmicas Prontas Para Aproximar Pais e Filhos
      </p>
      <p className="text-muted-foreground mb-8">
        Um material direto ao ponto, prático e fácil de aplicar.<br />
        Sem teoria. Sem psicologês. Sem enrolação.
      </p>

      <div className="w-12 h-1 bg-primary mx-auto mb-8 rounded-full" />

      <h3 className="font-display text-xl md:text-2xl mb-6">O Que Você Vai Encontrar</h3>

      <div className="grid gap-4 mb-8">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="bg-card rounded-xl border p-4 flex items-center gap-4 shadow-sm"
          >
            <div className="bg-secondary/10 p-3 rounded-full shrink-0">
              <f.icon className="w-5 h-5 text-secondary" />
            </div>
            <p className="text-foreground font-medium text-left">{f.text}</p>
          </motion.div>
        ))}
      </div>

      <p className="text-sm text-muted-foreground mb-6">
        Tudo organizado por situação e objetivo.
      </p>

      <CTAButton />
    </div>
  </section>
);

export default SolutionSection;
