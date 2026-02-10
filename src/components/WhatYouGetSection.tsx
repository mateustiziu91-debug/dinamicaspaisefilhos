import { BookOpen, Smartphone, Printer, Layout, Moon, Gamepad2, Ear, MessageCircleQuestion } from "lucide-react";
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
  <section className="py-14 px-4 bg-muted">
    <div className="container max-w-2xl mx-auto text-center">
      <h2 className="font-heading text-2xl md:text-3xl font-black mb-1">O Que Você Vai Receber</h2>
      <div className="w-10 h-1 bg-primary mx-auto rounded-full mb-8" />

      <div className="grid sm:grid-cols-2 gap-4 mb-10">
        {items.map((item, i) => (
          <div key={i} className="bg-white rounded-2xl border border-border p-5 text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-secondary/12 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
              <item.icon className="w-5 h-5 text-secondary" />
            </div>
            <h3 className="font-heading font-bold text-foreground text-sm mb-1">{item.title}</h3>
            <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      <CTAButton />
    </div>
  </section>
);

export default WhatYouGetSection;
