const Footer = () => {
  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <a href="#home" className="font-display text-xl font-bold text-primary-foreground">
              Mangal Murti <span className="text-accent">Aluminium</span>
            </a>
            <p className="text-primary-foreground/60 text-sm mt-1">
              Quality aluminium solutions since 2010
            </p>
          </div>
          <div className="flex gap-8">
            {["Services", "Products", "About", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-primary-foreground/60 text-sm hover:text-primary-foreground transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/40 text-sm">
            © {new Date().getFullYear()} Mangal Murti Aluminium. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
