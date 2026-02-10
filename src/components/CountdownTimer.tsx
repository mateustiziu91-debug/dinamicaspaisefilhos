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
      const h = Math.floor(diff / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      setTime({ hours: h, minutes: m, seconds: s });
    };

    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const pad = (n: number) => n.toString().padStart(2, "0");

  return (
    <div className="bg-urgency text-urgency-foreground rounded-2xl p-5 text-center">
      <p className="font-bold text-sm mb-3">⏰ OFERTA ESPECIAL EXPIRA EM:</p>
      <div className="flex justify-center gap-3">
        {[
          { val: time.hours, label: "HORAS" },
          { val: time.minutes, label: "MIN" },
          { val: time.seconds, label: "SEG" },
        ].map((item) => (
          <div key={item.label} className="bg-background/20 rounded-xl px-4 py-2 min-w-[70px]">
            <span className="text-3xl font-bold block">{pad(item.val)}</span>
            <span className="text-xs font-medium">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;
