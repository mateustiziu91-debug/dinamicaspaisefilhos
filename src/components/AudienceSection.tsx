import { Briefcase, Baby, MessageSquare, Heart } from "lucide-react";

const audiences = [
  { icon: Briefcase, text: "Pais que trabalham o dia todo e têm pouco tempo", color: "bg-primary/10 text-primary" },
  { icon: Baby, text: "Pais de crianças e pré-adolescentes", color: "bg-secondary/10 text-secondary" },
  { icon: MessageSquare, text: "Quem sente que o diálogo está diminuindo", color: "bg-primary/10 text-primary" },
  { icon: Heart, text: "Quem quer fortalecer o vínculo antes que seja tarde", color: "bg-secondary/10 text-secondary" },
];

const AudienceSection = () => (
  <section className="py-14 px-4 bg-muted">
    <div className="container max-w-2xl mx-auto text-center">
      <h2 className="font-bold text-xl md:text-2xl mb-1">Pra Quem É Esse Material</h2>
      <div className="w-10 h-1 bg-primary mx-auto rounded-full mb-8" />

      <div className="space-y-3">
        {audiences.map((a, i) => (
          <div
            key={i}
            className="bg-white rounded-xl border border-border p-4 flex items-center gap-4 shadow-sm"
          >
            <div className={`p-3 rounded-full shrink-0 ${a.color}`}>
              <a.icon className="w-5 h-5" />
            </div>
            <p className="text-foreground font-medium text-sm text-left">{a.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AudienceSection;
