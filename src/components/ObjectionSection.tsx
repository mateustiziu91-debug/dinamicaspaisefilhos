import { motion } from "framer-motion";

const objections = [
  {
    q: "\"Mas eu não tenho tempo.\"",
    a: "Você precisa de 10 minutos.",
  },
  {
    q: "\"Meu filho não gosta dessas coisas.\"",
    a: "As dinâmicas são leves, naturais e não parecem \"terapia\".",
  },
  {
    q: "\"E se não funcionar?\"",
    a: "Se você aplicar, funciona. Conexão é construída por repetição e presença.",
  },
];

const ObjectionSection = () => (
  <section className="py-12 px-4 bg-background">
    <div className="container max-w-2xl mx-auto">
      <h2 className="font-display text-2xl md:text-3xl text-center mb-8">
        Ainda tem dúvidas?
      </h2>

      <div className="space-y-4">
        {objections.map((o, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-muted rounded-2xl p-5"
          >
            <p className="font-bold text-foreground mb-2">{o.q}</p>
            <p className="text-primary font-medium">{o.a}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ObjectionSection;
