import { Award, Clock, Users, ShieldCheck } from "lucide-react";

const stats = [
  { icon: Clock, value: "15+", label: "Years Experience" },
  { icon: Users, value: "2,000+", label: "Happy Clients" },
  { icon: Award, value: "100%", label: "Quality Materials" },
  { icon: ShieldCheck, value: "5 Year", label: "Warranty" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-metallic-gradient">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">
              About Us
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Built on Trust & Precision
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              With over 15 years in the aluminium fabrication industry, we've built our reputation on quality workmanship, fair pricing, and reliable service.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our skilled team handles everything from custom window frames to professional powder coating. Every product is measured, fabricated, and installed with precision because we believe your space deserves the best.
            </p>
            <a
              href="#contact"
              className="inline-block bg-accent text-accent-foreground px-8 py-3 rounded-md font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              Contact Us Today
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-card rounded-lg p-6 text-center border border-border shadow-metallic"
              >
                <stat.icon className="w-8 h-8 text-accent mx-auto mb-3" />
                <p className="font-display text-2xl font-bold text-foreground">
                  {stat.value}
                </p>
                <p className="text-muted-foreground text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
