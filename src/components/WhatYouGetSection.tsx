import { BookOpen, Smartphone, Printer, Layout, Moon, Gamepad2, Ear, MessageCircleQuestion, Sparkles, CheckCircle2 } from "lucide-react";
import CTAButton from "./CTAButton";

const items = [
  { icon: BookOpen, title: "Material Completo em PDF", desc: "80+ dinâmicas organizadas e prontas para aplicar no dia a dia" },
  { icon: Layout, title: "Práticas Estruturadas", desc: "Todas organizadas por situação, objetivo e tempo de duração" },
  { icon: Smartphone, title: "Acesso Digital Completo", desc: "Acesse por celular, tablet ou computador a qualquer hora" },
  { icon: Printer, title: "Pronto para Imprimir", desc: "Material formatado para impressão e uso durante seus momentos" },
  { icon: Moon, title: "Atividades Para Antes de Dormir", desc: "Momentos de conexão perfeitos para encerrar o dia juntos" },
  { icon: Gamepad2, title: "Jogos Rápidos de Conexão", desc: "Dinâmicas leves e divertidas que criam vínculo naturalmente" },
  { icon: Ear, title: "Exercícios de Escuta Ativa", desc: "Técnicas para ouvir de verdade e fazer seu filho se sentir visto" },
  { icon: MessageCircleQuestion, title: "Perguntas Que Abrem o Coração", desc: "Perguntas certeiras que fazem seu filho se abrir com confiança" },
];

const WhatYouGetSection = () => (
  <section className="py-16 px-4 bg-gradient-to-b from-muted to-background relative overflow-hidden">
    <div className="container max-w-2xl mx-auto relative z-10">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-1.5 bg-secondary/10 text-secondary font-bold text-[11px] tracking-wide px-4 py-1.5 rounded-full mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          TUDO INCLUSO NO PACOTE
        </div>
        <h2 className="font-heading text-2xl md:text-3xl font-black mb-2">
          Veja <span className="text-secondary">Tudo</span> Que Você Vai Receber
        </h2>
        <p className="text-muted-foreground text-sm max-w-sm mx-auto">
          Material completo para transformar a relação com seu filho 💛
        </p>
      </div>

      {/* Items list */}
      <div className="space-y-3 mb-10">
        {items.map((item, i) => (
          <div
            key={i}
            className="flex items-start gap-4 bg-card rounded-2xl border border-border/60 p-4 shadow-sm hover:shadow-md hover:border-secondary/30 transition-all duration-300"
          >
            <div className="bg-secondary/10 w-11 h-11 rounded-xl flex items-center justify-center shrink-0">
              <item.icon className="w-5 h-5 text-secondary" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-0.5">
                <h3 className="font-heading font-bold text-foreground text-sm">{item.title}</h3>
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
              </div>
              <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <CTAButton />
      </div>
    </div>
  </section>
);

export default WhatYouGetSection;
