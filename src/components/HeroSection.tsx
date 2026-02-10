import { useState } from "react";
import { Volume2, VolumeX, Play } from "lucide-react";
import CTAButton from "./CTAButton";

const HeroSection = () => {
  const [muted, setMuted] = useState(true);
  const [started, setStarted] = useState(false);

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
          {!started ? (
            <div
              className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer"
              onClick={() => setStarted(true)}
            >
              <div className="bg-urgency/90 hover:bg-urgency transition-colors rounded-2xl px-8 py-6 flex flex-col items-center gap-2">
                <Play className="w-10 h-10 text-white" />
                <p className="text-white font-extrabold text-sm">Clique para assistir</p>
              </div>
            </div>
          ) : (
            <>
              <video
                src="https://i.imgur.com/8zdeQyw.mp4"
                className="w-full h-full object-cover"
                autoPlay
                loop
                playsInline
                muted={muted}
                crossOrigin="anonymous"
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
            </>
          )}
        </div>

        <CTAButton />
      </div>
    </section>
  );
};

export default HeroSection;
