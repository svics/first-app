import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ShoppingBag, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen flex-col bg-background px-6 pb-8">
      {/* Header */}
      <div className="flex items-center justify-between pt-12">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <ShoppingBag className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="font-display text-base font-bold text-foreground">RetailScan</span>
        </div>
        <button
          onClick={() => navigate("/signup")}
          className="rounded-lg bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary"
        >
          Sign Up
        </button>
      </div>

      {/* Hero */}
      <div className="flex flex-1 flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6 flex h-24 w-24 items-center justify-center rounded-3xl bg-primary"
        >
          <ShoppingBag className="h-12 w-12 text-primary-foreground" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="font-display text-3xl font-bold leading-tight text-foreground"
        >
          Know Your
          <br />
          Products
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="mt-3 max-w-[260px] text-sm leading-relaxed text-muted-foreground"
        >
          Scan, search, and verify retail products instantly. Keep your purchases safe and informed.
        </motion.p>
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="space-y-3"
      >
        <Button
          onClick={() => navigate("/signin")}
          className="h-12 w-full rounded-xl text-base font-semibold"
        >
          Get Started <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
        <p className="text-center text-xs text-muted-foreground">
          Free to use · No credit card required
        </p>
      </motion.div>
    </div>
  );
};

export default Index;
