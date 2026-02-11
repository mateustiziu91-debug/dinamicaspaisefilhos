import { useState, useRef, useCallback, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";
import CTAButton from "./CTAButton";

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

const YOUTUBE_VIDEO_ID = "nH7Tdx3XOyE";

const HeroSection = () => {
  const [muted, setMuted] = useState(true);
  const [apiReady, setApiReady] = useState(false);
  const playerRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Load YouTube IFrame API
  useEffect(() => {
    if (window.YT && window.YT.Player) {
      setApiReady(true);
      return;
    }
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.head.appendChild(tag);
    window.onYouTubeIframeAPIReady = () => setApiReady(true);
  }, []);

  // Create player once API is ready
  useEffect(() => {
    if (!apiReady || playerRef.current) return;
    playerRef.current = new window.YT.Player("yt-player", {
      videoId: YOUTUBE_VIDEO_ID,
      playerVars: {
        autoplay: 1,
        mute: 1,
        controls: 0,
        modestbranding: 1,
        rel: 0,
        showinfo: 0,
        loop: 1,
        playlist: YOUTUBE_VIDEO_ID,
        playsinline: 1,
      },
      events: {
        onReady: (e: any) => e.target.playVideo(),
      },
    });
  }, [apiReady]);

  const handleUnmute = useCallback(() => {
    const p = playerRef.current;
    if (!p) return;
    if (muted) {
      p.seekTo(0, true);
      p.unMute();
      p.setVolume(100);
      setMuted(false);
    } else {
      p.mute();
      setMuted(true);
    }
  }, [muted]);

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
          Não Deixe Seu Filho Crescer{" "}
          <span className="text-urgency">Longe de Você.</span>
        </h1>

        <p className="text-base md:text-lg text-foreground leading-relaxed mb-8 max-w-xl mx-auto font-semibold">
          Descubra <strong className="text-primary">80+ Dinâmicas Práticas</strong> Que Reconectam Pai e Filho em Apenas{" "}
          <span className="text-secondary font-extrabold">10 Minutos Por Dia</span>{" "}
          — Mesmo Com Rotina Corrida e Pouca Conversa.
        </p>

        {/* VSL 9:16 */}
        <div
          ref={containerRef}
          className="relative w-full max-w-sm mx-auto aspect-[9/16] rounded-2xl overflow-hidden mb-8 shadow-2xl border border-foreground/10 bg-black"
        >
          <div id="yt-player" className="absolute inset-0 w-full h-full" />

          {/* Unmute overlay */}
          {muted && (
            <div
              className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer z-10"
              onClick={handleUnmute}
            >
              <div className="bg-urgency/90 hover:bg-urgency transition-colors rounded-2xl px-8 py-6 flex flex-col items-center gap-2 animate-pulse">
                <VolumeX className="w-10 h-10 text-white" />
                <p className="text-white font-extrabold text-sm">🔊 Ativar som</p>
              </div>
            </div>
          )}

          {/* Small mute toggle when unmuted */}
          {!muted && (
            <button
              onClick={handleUnmute}
              className="absolute bottom-4 right-4 z-10 bg-black/60 hover:bg-black/80 text-white rounded-full p-2 transition-colors"
            >
              <Volume2 className="w-5 h-5" />
            </button>
          )}
        </div>

        <CTAButton />
      </div>
    </section>
  );
};

export default HeroSection;
