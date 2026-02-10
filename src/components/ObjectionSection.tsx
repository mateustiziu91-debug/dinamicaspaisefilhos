const objections = [
  {
    q: "\"Mas eu não tenho tempo.\"",
    a: "Você precisa de apenas 10 minutos por dia.",
  },
  {
    q: "\"Meu filho não gosta dessas coisas.\"",
    a: "As dinâmicas são leves, naturais e não parecem \"terapia\".",
  },
  {
    q: "\"E se não funcionar?\"",
    a: "Se você aplicar, funciona. Conexão é construída por repetição e presença.",
  },
];

const ObjectionSection = () => (
  <section className="py-14 px-4 bg-background">
    <div className="container max-w-2xl mx-auto">
      <h2 className="font-bold text-xl md:text-2xl text-center mb-8">
        Ainda tem dúvidas?
      </h2>

      <div className="space-y-3">
        {objections.map((o, i) => (
          <div key={i} className="bg-muted rounded-2xl p-5 border border-border">
            <p className="font-bold text-foreground mb-1.5 text-sm">{o.q}</p>
            <p className="text-primary font-semibold text-sm">{o.a}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ObjectionSection;
