import { motion } from "framer-motion";

const painPoints = [
  "Seu filho passa mais tempo no celular do que conversando com você.",
  "As respostas estão mais curtas.",
  "O clima anda estranho.",
  "Você sente que está presente… mas não conectado.",
];

const PainSection = () => (
  <section className="py-12 px-4 bg-background">
    <div className="container max-w-2xl mx-auto">
      <h2 className="font-display text-2xl md:text-3xl text-center mb-8">
        Talvez você já tenha sentido isso:
      </h2>

      <div className="space-y-4 mb-8">
        {painPoints.map((point, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex items-start gap-3 bg-urgency/5 border border-urgency/20 rounded-xl p-4"
          >
            <span className="text-urgency text-xl mt-0.5">😔</span>
            <p className="text-foreground">{point}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center bg-muted rounded-2xl p-6"
      >
        <p className="text-lg font-semibold text-foreground mb-2">E o pior?</p>
        <p className="text-urgency font-bold text-lg mb-4">
          Você tem medo de que, quando perceber, ele já esteja distante demais.
        </p>
        <div className="w-16 h-0.5 bg-primary mx-auto mb-4" />
        <p className="text-muted-foreground">
          A verdade é simples:{" "}
          <strong className="text-foreground">
            Conexão não acontece sozinha. Ela precisa ser construída.
          </strong>
        </p>
      </motion.div>
    </div>
  </section>
);

export default PainSection;
