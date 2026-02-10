import { useEffect, useState } from "react";

const CountdownTimer = () => {
  const [time, setTime] = useState({ hours: 1, minutes: 59, seconds: 59 });

  useEffect(() => {
    const saved = sessionStorage.getItem("countdown_end");
    let end: number;
    if (saved) {
      end = parseInt(saved);
    } else {
      end = Date.now() + 2 * 60 * 60 * 1000;
      sessionStorage.setItem("countdown_end", end.toString());
    }

    const tick = () => {
      const diff = Math.max(0, end - Date.now());
      setTime({
        hours: Math.floor(diff / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };

    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const pad = (n: number) => n.toString().padStart(2, "0");

  return (
    <div className="bg-gradient-to-r from-urgency to-red-500 text-urgency-foreground rounded-2xl p-4 text-center shadow-lg">
      <p className="font-bold text-xs tracking-wider mb-2">⏰ OFERTA ESPECIAL EXPIRA EM:</p>
      <div className="flex justify-center gap-2">
        {[
          { val: time.hours, label: "HORAS" },
          { val: time.minutes, label: "MIN" },
          { val: time.seconds, label: "SEG" },
        ].map((item) => (
          <div key={item.label} className="bg-white/20 backdrop-blur-sm rounded-xl px-3 py-2 min-w-[65px]">
            <span className="text-2xl md:text-3xl font-black block leading-none">{pad(item.val)}</span>
            <span className="text-[10px] font-semibold tracking-wider opacity-80">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;
