const painPoints = [
  { emoji: "📱", text: "Seu filho passa mais tempo no celular do que conversando com você." },
  { emoji: "😶", text: "As respostas estão mais curtas." },
  { emoji: "😬", text: "O clima anda estranho." },
  { emoji: "💔", text: "Você sente que está presente… mas não conectado." },
];

const PainSection = () => (
  <section className="py-14 px-4 bg-muted">
    <div className="container max-w-2xl mx-auto">
      <h2 className="font-display text-2xl md:text-3xl text-center font-black mb-8">
        Talvez você já tenha sentido isso:
      </h2>

      <div className="space-y-3 mb-8">
        {painPoints.map((point, i) => (
          <div
            key={i}
            className="flex items-start gap-3 bg-white border border-urgency/15 rounded-xl p-4 shadow-sm"
          >
            <span className="text-xl leading-none mt-0.5">{point.emoji}</span>
            <p className="text-foreground text-[15px] leading-relaxed">{point.text}</p>
          </div>
        ))}
      </div>

      <div className="text-center bg-white rounded-2xl p-7 shadow-md border border-border">
        <p className="text-foreground font-bold text-lg mb-2">E o pior?</p>
        <p className="text-urgency font-extrabold text-lg md:text-xl mb-5 leading-snug">
          Você tem medo de que, quando perceber,<br className="hidden md:block" /> ele já esteja distante demais.
        </p>
        <div className="w-12 h-1 bg-primary mx-auto rounded-full mb-5" />
        <p className="text-muted-foreground text-sm leading-relaxed">
          A verdade é simples:{" "}
          <strong className="text-foreground">
            Conexão não acontece sozinha. Ela precisa ser construída.
          </strong>
        </p>
      </div>
    </div>
  </section>
);

export default PainSection;
