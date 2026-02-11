import { BookOpen, Smartphone, Printer, Layout, Moon, Gamepad2, Ear, MessageCircleQuestion, Sparkles } from "lucide-react";
import CTAButton from "./CTAButton";

const items = [
  { icon: BookOpen, title: "Material Completo em PDF", desc: "80+ dinâmicas organizadas e prontas para aplicar no dia a dia", gradient: "from-primary/20 to-emerald-300/20", iconBg: "bg-primary", accent: "border-primary/30" },
  { icon: Layout, title: "Práticas Estruturadas", desc: "Todas organizadas por situação, objetivo e tempo de duração", gradient: "from-secondary/20 to-sky-300/20", iconBg: "bg-secondary", accent: "border-secondary/30" },
  { icon: Smartphone, title: "Acesso Digital Completo", desc: "Acesse por celular, tablet ou computador a qualquer hora", gradient: "from-primary/20 to-teal-300/20", iconBg: "bg-primary", accent: "border-primary/30" },
  { icon: Printer, title: "Pronto para Imprimir", desc: "Material formatado para impressão e uso durante seus momentos", gradient: "from-secondary/20 to-blue-300/20", iconBg: "bg-secondary", accent: "border-secondary/30" },
  { icon: Moon, title: "Atividades Para Antes de Dormir", desc: "Momentos de conexão perfeitos para encerrar o dia juntos", gradient: "from-indigo-200/30 to-purple-200/30", iconBg: "bg-indigo-500", accent: "border-indigo-300/40" },
  { icon: Gamepad2, title: "Jogos Rápidos de Conexão", desc: "Dinâmicas leves e divertidas que criam vínculo naturalmente", gradient: "from-amber-200/30 to-orange-200/30", iconBg: "bg-amber-500", accent: "border-amber-300/40" },
  { icon: Ear, title: "Exercícios de Escuta Ativa", desc: "Técnicas para ouvir de verdade e fazer seu filho se sentir visto", gradient: "from-rose-200/30 to-pink-200/30", iconBg: "bg-rose-500", accent: "border-rose-300/40" },
  { icon: MessageCircleQuestion, title: "Perguntas Que Abrem o Coração", desc: "Perguntas certeiras que fazem seu filho se abrir com confiança", gradient: "from-primary/20 to-emerald-200/20", iconBg: "bg-primary", accent: "border-primary/30" },
];

const WhatYouGetSection = () => (
  <section className="py-16 px-4 bg-gradient-to-b from-muted via-background to-muted relative overflow-hidden">
    {/* Decorative blobs */}
    <div className="absolute top-10 left-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
    <div className="absolute bottom-10 right-0 w-52 h-52 bg-secondary/10 rounded-full blur-3xl" />

    <div className="container max-w-2xl mx-auto text-center relative z-10">
      <div className="inline-flex items-center gap-1.5 bg-primary/10 text-primary font-bold text-xs px-4 py-1.5 rounded-full mb-4">
        <Sparkles className="w-3.5 h-3.5" />
        TUDO INCLUSO NO PACOTE
      </div>
      <h2 className="font-heading text-2xl md:text-3xl font-black mb-2">
        Veja <span className="text-primary">Tudo</span> Que Você Vai Receber
      </h2>
      <p className="text-muted-foreground text-sm mb-8 max-w-md mx-auto">Material completo para transformar a relação com seu filho 💛</p>

      <div className="grid sm:grid-cols-2 gap-4 mb-10">
        {items.map((item, i) => (
          <div
            key={i}
            className={`bg-gradient-to-br ${item.gradient} rounded-2xl border-2 ${item.accent} p-5 text-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}
          >
            <div className={`${item.iconBg} w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-md`}>
              <item.icon className="w-5 h-5 text-white" />
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
