import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What types of aluminium windows do you offer?",
    answer: "We offer sliding windows, casement windows, fixed panels, and top-hung windows. All are custom-made to your exact measurements in a range of finishes.",
  },
  {
    question: "How long does installation typically take?",
    answer: "Standard window or door installations take 1-2 days. Larger projects like full-house installations may take 3-5 working days depending on scope.",
  },
  {
    question: "Do you provide free quotes?",
    answer: "Yes! We provide free on-site measurements and detailed quotes at no obligation. Simply contact us to schedule a visit.",
  },
  {
    question: "What powder coating colors are available?",
    answer: "We offer the full RAL color range that's over 200 colors including popular choices like charcoal, white, bronze, and black. Custom colors can also be matched.",
  },
  {
    question: "Do your products come with a warranty?",
    answer: "Yes, all our aluminium products come with a 5-year warranty covering manufacturing defects. Powder coating carries a 10-year warranty against peeling and fading.",
  },
  {
    question: "Can you work with existing frames?",
    answer: "In many cases, yes. We can retrofit new glass or upgrade fittings on existing aluminium frames. We'll assess this during the site visit.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">
            FAQ
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-2xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-card border border-border rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-muted/50 transition-colors"
              >
                <span className="font-semibold text-foreground text-sm pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-muted-foreground text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
