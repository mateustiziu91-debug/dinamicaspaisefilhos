import CTAButton from "./CTAButton";

const FinalCTA = () => (
  <section className="py-12 px-4 bg-foreground text-background text-center">
    <div className="container max-w-2xl mx-auto">
      <h2 className="font-display text-2xl md:text-3xl mb-4 text-background">
        Porque o tempo passa.<br />E essa fase não volta.
      </h2>
      <p className="text-background/70 mb-8 max-w-md mx-auto">
        Clique no botão abaixo e comece hoje mesmo a reconstruir o vínculo com seu filho.
      </p>
      <CTAButton />
    </div>
  </section>
);

export default FinalCTA;
