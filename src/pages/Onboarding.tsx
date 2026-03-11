import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ScanBarcode, Search, AlertTriangle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
  {
    icon: ScanBarcode,
    title: "Scan Products",
    description: "Instantly scan any product barcode to get detailed information, pricing, and reviews.",
    color: "bg-primary",
  },
  {
    icon: Search,
    title: "Search & Discover",
    description: "Find products by name, category, or brand. Compare prices and read verified reviews.",
    color: "bg-info",
  },
  {
    icon: AlertTriangle,
    title: "Report Issues",
    description: "Help the community by reporting counterfeit, expired, or problematic products.",
    color: "bg-accent",
  },
];

const Onboarding = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      navigate("/home");
    }
  };

  const handleSkip = () => {
    navigate("/home");
  };

  return (
    <div className="flex min-h-screen flex-col bg-background px-6 pb-8 pt-12">
      <div className="flex justify-end">
        <button onClick={handleSkip} className="text-sm font-medium text-muted-foreground">
          Skip
        </button>
      </div>

      <div className="flex flex-1 flex-col items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.35 }}
            className="flex flex-col items-center text-center"
          >
            <div className={`mb-8 flex h-28 w-28 items-center justify-center rounded-3xl ${slides[currentSlide].color}`}>
              {(() => {
                const Icon = slides[currentSlide].icon;
                return <Icon className="h-14 w-14 text-primary-foreground" />;
              })()}
            </div>
            <h2 className="font-display text-2xl font-bold text-foreground">
              {slides[currentSlide].title}
            </h2>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {slides[currentSlide].description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="space-y-6">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === currentSlide ? "w-8 bg-primary" : "w-2 bg-border"
              }`}
            />
          ))}
        </div>

        <Button onClick={handleNext} className="h-12 w-full rounded-xl text-base font-semibold">
          {currentSlide < slides.length - 1 ? (
            "Next"
          ) : (
            <span className="flex items-center gap-2">
              Get Started <ArrowRight className="h-4 w-4" />
            </span>
          )}
        </Button>
      </div>
    </div>
  );
};

export default Onboarding;
