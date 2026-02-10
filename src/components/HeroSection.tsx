import CTAButton from "./CTAButton";

const HeroSection = () => {

  return (
    <section className="bg-background pt-0 pb-10 px-4">
      {/* Full-width discount banner */}
      <div className="w-screen relative left-1/2 -translate-x-1/2 bg-urgency text-urgency-foreground text-center py-2.5 px-4 mb-6">
        <p className="text-xs md:text-sm font-extrabold tracking-wide">
          🔥 DESCONTO SÓ HOJE — {new Date().toLocaleDateString("pt-BR")} 🔥
        </p>
      </div>

      <div className="container max-w-2xl mx-auto text-center">
        <h1 className="font-heading text-[1.7rem] md:text-[2.5rem] leading-[1.1] font-black mb-4 tracking-tight">
          Seu Filho Está Crescendo…{" "}
          <span className="text-urgency">e Se Afastando?</span>
        </h1>

        <p className="text-base md:text-lg text-foreground leading-relaxed mb-2 max-w-xl mx-auto font-semibold">
          Descubra <strong className="text-primary">80+ Dinâmicas Simples</strong> que Criam{" "}
          <span className="text-secondary font-extrabold">Conexão Real</span>{" "}
          Mesmo Que Você Tenha Só 10 Minutos Por Dia.
        </p>

        <p className="text-sm text-muted-foreground mb-8 max-w-md mx-auto">
          Mesmo que sua rotina seja corrida, que ele esteja mais fechado ou que vocês quase não conversem mais como antes.
        </p>

        {/* VSL */}
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-8 shadow-2xl border border-foreground/10">
          <iframe
            src="https://fast.wistia.net/embed/iframe/74msw27hzz?autoPlay=true&controlsVisibleOnLoad=false&playButton=true"
            className="w-full h-full absolute inset-0"
            allow="autoplay; fullscreen"
            allowFullScreen
            frameBorder="0"
          />
        </div>

        <CTAButton />
      </div>
    </section>
  );
};

export default HeroSection;
