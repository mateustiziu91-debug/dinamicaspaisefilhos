import authorImg from "@/assets/author-luiza.jpg";

const AuthorSection = () => (
  <section className="py-14 px-4 bg-muted">
    <div className="container max-w-md mx-auto">
      <div className="bg-white rounded-3xl border border-border p-6 shadow-sm text-center">
        <div className="relative inline-block mb-4">
          <img
            src={authorImg}
            alt="Luiza Seixas"
            className="w-24 h-24 rounded-full object-cover shadow-lg border-4 border-secondary/20"
          />
          <div className="absolute -bottom-1 -right-1 bg-secondary text-secondary-foreground text-[10px] font-bold w-7 h-7 rounded-full flex items-center justify-center shadow">
            ✨
          </div>
        </div>

        <p className="text-[10px] text-muted-foreground font-bold tracking-widest uppercase mb-1">Sobre a Autora</p>
        <h3 className="font-heading font-bold text-xl text-foreground mb-1">Luiza Seixas</h3>
        <p className="text-xs text-secondary font-semibold mb-3">Mãe • Educadora • +10 anos de experiência</p>

        <p className="text-sm text-muted-foreground leading-relaxed mb-3">
          Apaixonada por fortalecer vínculos familiares. Há mais de 10 anos ajudando pais a se reconectarem com seus filhos através de dinâmicas simples e práticas.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Acredita que <strong className="text-foreground">pequenos momentos de presença criam memórias que duram a vida toda</strong>. Já impactou mais de <strong className="text-secondary">5.000 famílias</strong>.
        </p>
      </div>
    </div>
  </section>
);

export default AuthorSection;
