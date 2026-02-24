import { useState } from "react";
import { ClipboardList, Ruler, Wrench, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const steps = [
  {
    icon: ClipboardList,
    title: "1. Consultation",
    description: "Tell us what you need windows, doors, louvers, or coating. We'll discuss options, styles, and budget.",
  },
  {
    icon: Ruler,
    title: "2. Measurement",
    description: "Our team visits your site to take precise measurements and assess installation requirements.",
  },
  {
    icon: Wrench,
    title: "3. Fabrication",
    description: "Your products are custom-built in our workshop using premium aluminium and quality fittings.",
  },
  {
    icon: CheckCircle2,
    title: "4. Installation",
    description: "Professional installation by our experienced team, with cleanup and a final quality check.",
  },
];

const HowItWorksSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">
            How It Works
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Simple 4-Step Process
          </h2>
          <p className="text-muted-foreground text-lg">
            From first contact to finished installation here's how we work.
          </p>
        </div>

        {/* Step selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {steps.map((step, i) => (
            <button
              key={step.title}
              onClick={() => setActiveStep(i)}
              className={`px-5 py-2.5 rounded-md text-sm font-semibold transition-all duration-300 ${
                activeStep === i
                  ? "bg-accent text-accent-foreground shadow-metallic"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {step.title.split(". ")[1]}
            </button>
          ))}
        </div>

        {/* Active step detail */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
            className="max-w-xl mx-auto bg-card border border-border rounded-lg p-8 text-center shadow-metallic"
          >
            {(() => {
              const Icon = steps[activeStep].icon;
              return (
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-5">
                  <Icon className="w-8 h-8 text-accent" />
                </div>
              );
            })()}
            <h3 className="font-display text-xl font-bold text-foreground mb-3">
              {steps[activeStep].title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {steps[activeStep].description}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Progress dots */}
        <div className="flex justify-center gap-2 mt-8">
          {steps.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveStep(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeStep === i ? "w-8 bg-accent" : "w-2 bg-border"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
