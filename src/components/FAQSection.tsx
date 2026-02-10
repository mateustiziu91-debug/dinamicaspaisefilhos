import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Mas eu não tenho tempo.",
    a: "Você precisa de apenas 10 minutos por dia. As dinâmicas foram pensadas para pais com rotina corrida.",
  },
  {
    q: "Meu filho não gosta dessas coisas.",
    a: "As dinâmicas são leves, naturais e não parecem \"terapia\". Seu filho nem vai perceber que é uma atividade planejada.",
  },
  {
    q: "E se não funcionar?",
    a: "Se você aplicar, funciona. Conexão é construída por repetição e presença. E se não gostar, tem garantia de 7 dias.",
  },
  {
    q: "Para qual idade é indicado?",
    a: "O material foi criado para pais de crianças e pré-adolescentes (de 4 a 14 anos aproximadamente).",
  },
  {
    q: "Recebo o material na hora?",
    a: "Sim! Após a confirmação do pagamento, você recebe acesso imediato por e-mail. É 100% digital.",
  },
  {
    q: "Funciona para pais separados?",
    a: "Com certeza! As dinâmicas são perfeitas para qualquer momento que você tenha com seu filho, independente da configuração familiar.",
  },
];

const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-14 px-4 bg-background">
      <div className="container max-w-2xl mx-auto">
        <h2 className="font-heading text-2xl md:text-3xl font-black text-center mb-1">Perguntas Frequentes</h2>
        <div className="w-10 h-1 bg-primary mx-auto rounded-full mb-8" />

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-muted rounded-xl border border-border overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-4 text-left cursor-pointer"
              >
                <span className="font-bold text-foreground text-sm pr-4">{faq.q}</span>
                <ChevronDown
                  className={`w-4 h-4 text-muted-foreground shrink-0 transition-transform duration-200 ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              {open === i && (
                <div className="px-4 pb-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
