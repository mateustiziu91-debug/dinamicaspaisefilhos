import { motion } from "framer-motion";
import { Briefcase, Baby, MessageSquare, Heart } from "lucide-react";

const audiences = [
  { icon: Briefcase, text: "Pais que trabalham o dia todo e têm pouco tempo" },
  { icon: Baby, text: "Pais de crianças e pré-adolescentes" },
  { icon: MessageSquare, text: "Quem sente que o diálogo está diminuindo" },
  { icon: Heart, text: "Quem quer fortalecer o vínculo antes que seja tarde" },
];

const AudienceSection = () => (
  <section className="py-12 px-4 bg-muted">
    <div className="container max-w-2xl mx-auto text-center">
      <h2 className="font-display text-2xl md:text-3xl mb-2">Pra Quem É Esse Material</h2>
      <div className="w-12 h-1 bg-primary mx-auto mb-8 rounded-full" />

      <div className="grid gap-4">
        {audiences.map((a, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card rounded-xl border p-5 flex items-center gap-4 shadow-sm"
          >
            <div className="bg-primary/10 p-3 rounded-full shrink-0">
              <a.icon className="w-5 h-5 text-primary" />
            </div>
            <p className="text-foreground font-medium text-left">{a.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AudienceSection;
