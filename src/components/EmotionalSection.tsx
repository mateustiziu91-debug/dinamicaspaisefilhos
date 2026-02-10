const EmotionalSection = () => (
  <section className="py-14 px-4 bg-muted">
    <div className="container max-w-xl mx-auto text-center">
      <h2 className="font-display text-2xl md:text-3xl font-black mb-8">Imagine:</h2>

      <div className="space-y-5 mb-10">
        {[
          "Seu filho rindo com você.",
          "Contando algo que antes guardava.",
          "Se sentindo seguro para conversar.",
        ].map((text, i) => (
          <p key={i} className="text-lg md:text-xl font-display font-bold text-primary leading-snug">
            ✨ {text}
          </p>
        ))}
      </div>

      <div className="bg-white border border-border rounded-2xl p-6 shadow-sm">
        <p className="text-foreground leading-relaxed">
          Não é sobre fazer "atividade".<br />
          <strong className="text-secondary text-lg font-extrabold">
            É sobre construir memória emocional.
          </strong>
        </p>
      </div>
    </div>
  </section>
);

export default EmotionalSection;
