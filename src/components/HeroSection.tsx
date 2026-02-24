import heroImage from "@/assets/hero-aluminium.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Aluminium workshop with premium window frames and sliding doors"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-hero-overlay" />
      </div>

      <div className="relative container mx-auto px-4 lg:px-8 pt-20">
        <div className="max-w-2xl">
          <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-4">
            Premium Aluminium Solutions
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
            Crafting Quality{" "}
            <span className="text-accent">Aluminium</span>{" "}
            For Every Space
          </h1>
          <p className="text-primary-foreground/80 text-lg md:text-xl leading-relaxed mb-8 max-w-lg">
            From window frames to sliding doors, bathroom louvers to powder coating we deliver precision-crafted aluminium products built to last.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#products"
              className="bg-accent text-accent-foreground px-8 py-3.5 rounded-md font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              View Products & Pricing
            </a>
            <a
              href="#contact"
              className="border border-primary-foreground/30 text-primary-foreground px-8 py-3.5 rounded-md font-semibold text-sm hover:bg-primary-foreground/10 transition-colors"
            >
              Get Free Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
