import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Vansh Nagda",
    role: "Mumbai, India",
    text: "Best quality material and best quality service.",
    rating: 5,
  },
  {
    name: "Fenil Domadiya",
    role: "Mumbai, India",
    text: "Good Aluminium Service",
    rating: 5,
  },
  {
    name: "Darshan Jijhuvadia",
    role: "Mumbai, India",
    text: "Good place",
    rating: 5,
  },
  {
    name: "Bhumika Lad",
    role: "Mumbai, India",
    text: "",
    rating: 5,
  },
  {
    name: "Umesh Hivarale",
    role: "Mumbai, India",
    text: "",
    rating: 5,
  },
  {
    name: "Siddhesh Nikam",
    role: "Mumbai, India",
    text: "",
    rating: 5,
  },
  {
    name: "Parshwa Shah",
    role: "Mumbai, India",
    text: "",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-20 lg:py-28 bg-metallic-gradient">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">
            Testimonials
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
        </div>

        <div className="max-w-2xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.35 }}
              className="bg-card border border-border rounded-lg p-8 lg:p-10 shadow-metallic text-center"
            >
              <Quote className="w-10 h-10 text-accent/20 mx-auto mb-4" />
              <p className="text-foreground text-lg leading-relaxed mb-6 italic">
                "{testimonials[current].text}"
              </p>
              <div className="flex justify-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < testimonials[current].rating
                        ? "text-accent fill-accent"
                        : "text-border"
                    }`}
                  />
                ))}
              </div>
              <p className="font-display font-semibold text-foreground">
                {testimonials[current].name}
              </p>
              <p className="text-muted-foreground text-sm">
                {testimonials[current].role}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center hover:border-accent transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            <span className="text-muted-foreground text-sm font-medium">
              {current + 1} / {testimonials.length}
            </span>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center hover:border-accent transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
