import { Check } from "lucide-react";

const products = [
  {
    name: "Sliding Window Frame",
    price: "R850",
    unit: "per m²",
    features: ["6mm clear glass", "Natural anodized finish", "Weatherstrip seals", "Standard sizes available"],
    popular: false,
  },
  {
    name: "Aluminium Sliding Door",
    price: "R1,450",
    unit: "per m²",
    features: ["6.38mm laminated glass", "Heavy-duty rollers", "Multi-point locking", "Custom sizes available"],
    popular: true,
  },
  {
    name: "Bathroom Louver",
    price: "R650",
    unit: "per unit",
    features: ["Adjustable blades", "Rust-resistant alloy", "Easy installation", "Standard bathroom sizes"],
    popular: false,
  },
  {
    name: "Casement Window",
    price: "R950",
    unit: "per m²",
    features: ["Opening outward design", "Friction stay hinges", "Fly screen included", "Energy efficient"],
    popular: false,
  },
  {
    name: "Fixed Glass Panel",
    price: "R700",
    unit: "per m²",
    features: ["Maximizes light", "Slim aluminium frame", "Clear or tinted glass", "Modern aesthetic"],
    popular: false,
  },
  {
    name: "Powder Coating",
    price: "R120",
    unit: "per m²",
    features: ["Wide color range", "UV resistant finish", "Scratch resistant", "10-year warranty"],
    popular: false,
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">
            Our Products
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Products & Pricing
          </h2>
          <p className="text-muted-foreground text-lg">
            Transparent pricing on all our aluminium products. Contact us for custom quotes on larger projects.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.name}
              className={`relative bg-card rounded-lg border transition-colors overflow-hidden ${
                product.popular
                  ? "border-accent shadow-metallic"
                  : "border-border hover:border-accent/30"
              }`}
            >
              {product.popular && (
                <div className="bg-accent text-accent-foreground text-xs font-bold px-4 py-1.5 text-center tracking-wider uppercase">
                  Most Popular
                </div>
              )}
              <div className="p-6">
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                  {product.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-5">
                  <span className="font-display text-3xl font-bold text-foreground">
                    {product.price}
                  </span>
                  <span className="text-muted-foreground text-sm">
                    {product.unit}
                  </span>
                </div>
                <ul className="space-y-3">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`block text-center mt-6 py-2.5 rounded-md text-sm font-semibold transition-colors ${
                    product.popular
                      ? "bg-accent text-accent-foreground hover:opacity-90"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                >
                  Get Quote
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground text-sm mt-10">
          * Prices are estimates and may vary based on specifications, quantities, and installation requirements.
        </p>
      </div>
    </section>
  );
};

export default ProductsSection;
