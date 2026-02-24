import { Maximize2, DoorOpen, Wind, Paintbrush } from "lucide-react";

const services = [
  {
    icon: Maximize2,
    title: "Window Frames",
    description:
      "Custom-fitted aluminium window frames for residential and commercial buildings. Available in sliding, casement, and fixed designs.",
  },
  {
    icon: DoorOpen,
    title: "Sliding Doors",
    description:
      "Smooth-gliding aluminium sliding doors that maximize natural light and save space. Durable, weatherproof, and stylish.",
  },
  {
    icon: Wind,
    title: "Bathroom Louvers",
    description:
      "Ventilation louvers designed for bathrooms and wet areas. Rust-resistant aluminium ensures long-lasting performance.",
  },
  {
    icon: Paintbrush,
    title: "Powder Coating",
    description:
      "Professional powder coating services in a wide range of colors. Provides a durable, weather-resistant, and attractive finish.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 lg:py-28 bg-metallic-gradient">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">
            What We Do
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground text-lg">
            We specialize in high-quality aluminium fabrication and finishing for homes and businesses.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-card rounded-lg p-6 shadow-metallic border border-border hover:border-accent/40 transition-colors group"
            >
              <div className="w-12 h-12 rounded-md bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                <service.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
