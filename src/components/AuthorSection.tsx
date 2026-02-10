import authorImg from "@/assets/author-luiza.jpg";

const AuthorSection = () => (
  <section className="py-14 px-4 bg-muted">
    <div className="container max-w-2xl mx-auto">
      <div className="bg-white rounded-3xl border border-border p-6 md:p-8 shadow-sm flex flex-col md:flex-row items-center gap-6">
        <img
          src={authorImg}
          alt="Luiza Seixas"
          className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover shadow-lg shrink-0"
        />
        <div className="text-center md:text-left">
          <p className="text-xs text-muted-foreground font-semibold tracking-widest uppercase mb-1">Sobre a Autora</p>
          <h3 className="font-heading font-bold text-xl text-foreground mb-2">Luiza Seixas</h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-3">
            Mãe, educadora e apaixonada por fortalecer vínculos familiares. Há mais de 10 anos ajudando pais a se reconectarem com seus filhos através de dinâmicas simples e práticas.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Acredita que <strong className="text-foreground">pequenos momentos de presença criam memórias que duram a vida toda</strong>. Já impactou mais de 5.000 famílias com seus materiais.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default AuthorSection;
