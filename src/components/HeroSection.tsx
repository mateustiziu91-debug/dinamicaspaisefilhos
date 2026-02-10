import { motion } from "framer-motion";
import CTAButton from "./CTAButton";

const HeroSection = () => (
  <section className="relative overflow-hidden bg-gradient-to-b from-muted to-background py-10 px-4">
    <div className="container max-w-2xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="inline-block bg-urgency text-urgency-foreground text-xs font-bold px-4 py-1.5 rounded-full mb-6"
      >
        DESCONTO SÓ HOJE {new Date().toLocaleDateString("pt-BR")}
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-3xl md:text-4xl lg:text-5xl font-display leading-tight mb-4"
      >
        Seu Filho Está Crescendo…{" "}
        <span className="text-urgency">e Se Afastando?</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-lg md:text-xl text-foreground mb-3"
      >
        Descubra <strong className="text-primary">80+ Dinâmicas Simples</strong>{" "}
        que Criam{" "}
        <span className="text-secondary font-semibold">Conexão Real</span>{" "}
        Mesmo Que Você Tenha Só 10 Minutos Por Dia.
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-muted-foreground mb-8 max-w-xl mx-auto"
      >
        Mesmo que sua rotina seja corrida, que ele esteja mais fechado ou que vocês quase não conversem mais como antes.
      </motion.p>

      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 }}>
        <CTAButton />
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
