import { motion } from "framer-motion";

const EmotionalSection = () => (
  <section className="py-12 px-4 bg-gradient-to-b from-muted to-background">
    <div className="container max-w-2xl mx-auto text-center">
      <h2 className="font-display text-2xl md:text-3xl mb-8">Imagine:</h2>

      <div className="space-y-4 mb-8">
        {[
          "Seu filho rindo com você.",
          "Contando algo que antes guardava.",
          "Se sentindo seguro para conversar.",
        ].map((text, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="text-xl md:text-2xl font-display text-primary"
          >
            ✨ {text}
          </motion.p>
        ))}
      </div>

      <div className="bg-card border rounded-2xl p-6 shadow-sm">
        <p className="text-foreground font-medium">
          Não é sobre fazer "atividade".<br />
          <strong className="text-secondary text-lg">
            É sobre construir memória emocional.
          </strong>
        </p>
      </div>
    </div>
  </section>
);

export default EmotionalSection;
