import { ShieldCheck } from "lucide-react";

const GuaranteeSection = () => (
  <section className="py-14 px-4 bg-muted">
    <div className="container max-w-lg mx-auto text-center">
      <div className="bg-white rounded-3xl border-2 border-primary/30 p-8 shadow-sm">
        <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
          <ShieldCheck className="w-8 h-8 text-primary" />
        </div>
        <h2 className="font-heading font-black text-xl mb-3">Garantia Incondicional de 7 Dias</h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Se por qualquer motivo você sentir que o material não é para você, basta enviar um e-mail em até 7 dias e devolvemos <strong className="text-foreground">100% do seu dinheiro</strong>. Sem perguntas, sem burocracia.
        </p>
        <p className="text-xs text-primary font-bold">
          Risco zero. A decisão é toda sua.
        </p>
      </div>
    </div>
  </section>
);

export default GuaranteeSection;
