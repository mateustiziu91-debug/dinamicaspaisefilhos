import { useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import CTAButton from "./CTAButton";

const HeroSection = () => {
  const [muted, setMuted] = useState(true);

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
        <div className="relative w-full aspect-video bg-black rounded-2xl overflow-hidden mb-8 shadow-2xl border border-foreground/10">
          <video
            src="https://i.imgur.com/8zdeQyw.mp4"
            className="w-full h-full object-cover"
            autoPlay
            loop
            playsInline
            muted={muted}
          />
          <div
            className="absolute inset-0 flex items-end justify-center pb-4 cursor-pointer"
            onClick={() => setMuted(!muted)}
          >
            <div className="bg-black/60 hover:bg-black/80 transition-colors rounded-full p-3">
              {muted ? (
                <VolumeX className="w-6 h-6 text-white" />
              ) : (
                <Volume2 className="w-6 h-6 text-white" />
              )}
            </div>
          </div>
        </div>

        <CTAButton />
      </div>
    </section>
  );
};

export default HeroSection;
