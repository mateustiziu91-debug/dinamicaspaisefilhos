import CTAButton from "./CTAButton";

const FinalCTA = () => (
  <section className="py-14 px-4 bg-gradient-to-b from-foreground to-[hsl(220_30%_8%)] text-center">
    <div className="container max-w-xl mx-auto">
      <p className="text-white/40 text-xs font-bold tracking-widest uppercase mb-3">
        Não espere mais
      </p>
      <h2 className="font-heading text-2xl md:text-3xl font-black text-white mb-3 leading-snug">
        Porque o tempo passa.<br />E essa fase não volta.
      </h2>
      <p className="text-white/50 text-sm mb-8 max-w-sm mx-auto leading-relaxed">
        Clique no botão abaixo e comece hoje mesmo a reconstruir o vínculo com seu filho.
      </p>
      <CTAButton text="QUERO COMEÇAR AGORA!" />
    </div>
  </section>
);

export default FinalCTA;
