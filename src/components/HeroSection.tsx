import { useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import CTAButton from "./CTAButton";

const HeroSection = () => {
  const [muted, setMuted] = useState(true);

  return (
    <section className="bg-background pt-6 pb-10 px-4">
      <div className="container max-w-2xl mx-auto text-center">
        {/* Urgency badge */}
        <div className="inline-block bg-urgency text-urgency-foreground text-xs font-bold px-5 py-1.5 rounded-full mb-6 shadow-sm">
          🔥 DESCONTO SÓ HOJE — {new Date().toLocaleDateString("pt-BR")}
        </div>

        {/* Headline */}
        <h1 className="font-display text-[1.75rem] md:text-4xl lg:text-[2.6rem] leading-[1.15] font-black mb-4 tracking-tight">
          Seu Filho Está Crescendo…{" "}
          <span className="text-urgency">e Se Afastando?</span>
        </h1>

        <p className="text-base md:text-lg text-foreground leading-relaxed mb-2 max-w-xl mx-auto">
          Descubra <strong className="text-primary">80+ Dinâmicas Simples</strong> que Criam{" "}
          <span className="text-secondary font-bold">Conexão Real</span>{" "}
          Mesmo Que Você Tenha Só 10 Minutos Por Dia.
        </p>

        <p className="text-sm text-muted-foreground mb-8 max-w-md mx-auto">
          Mesmo que sua rotina seja corrida, que ele esteja mais fechado ou que vocês quase não conversem mais como antes.
        </p>

        {/* VSL Placeholder */}
        <div className="relative w-full aspect-video bg-black rounded-2xl overflow-hidden mb-8 shadow-2xl border-2 border-border">
          <div
            className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer group"
            onClick={() => setMuted(!muted)}
          >
            {/* Replace src below with your actual VSL video URL */}
            <div className="flex flex-col items-center justify-center gap-3">
              <div className="bg-urgency/90 hover:bg-urgency transition-colors rounded-2xl px-8 py-6 flex flex-col items-center gap-2">
                <p className="text-white font-bold text-sm">Clique aqui</p>
                {muted ? (
                  <VolumeX className="w-10 h-10 text-white" />
                ) : (
                  <Volume2 className="w-10 h-10 text-white" />
                )}
                <p className="text-white font-bold text-sm">para ativar o som</p>
              </div>
            </div>
          </div>
        </div>

        <CTAButton />
      </div>
    </section>
  );
};

export default HeroSection;
