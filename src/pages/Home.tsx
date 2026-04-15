import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ScanBarcode,
  Search,
  AlertTriangle,
  LayoutGrid,
  Users,
  Menu,
  X,
  ChevronRight,
  Shield,
  Zap,
} from "lucide-react";

const actions = [
  {
    icon: ScanBarcode,
    title: "Scan a Product",
    description: "Use your camera to scan barcodes",
    path: "/scan",
  },
  {
    icon: Search,
    title: "Find a Product",
    description: "Search by name, brand or category",
    path: "/search",
  },
  {
    icon: AlertTriangle,
    title: "Report a Product",
    description: "Flag counterfeit or expired items",
    path: "/report",
  },
  {
    icon: LayoutGrid,
    title: "Browse Categories",
    description: "Explore products by category",
    path: "/search",
  },
];

const Home = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative min-h-[calc(100vh-5rem)] bg-background">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-5 pt-6 pb-4">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card shadow-sm transition-colors hover:bg-accent"
        >
          {menuOpen ? <X className="h-5 w-5 text-foreground" /> : <Menu className="h-5 w-5 text-foreground" />}
        </button>
        <button
          onClick={() => navigate("/signin")}
          className="flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90"
        >
          <Users className="h-3.5 w-3.5" />
          Join community
        </button>
      </div>

      {/* Hamburger Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: -280 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -280 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="absolute inset-x-0 top-[4.5rem] z-30 mx-4 overflow-hidden rounded-2xl border border-border bg-card shadow-lg"
          >
            <div className="p-2">
              {actions.map((action, i) => {
                const Icon = action.icon;
                return (
                  <motion.button
                    key={action.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => {
                      setMenuOpen(false);
                      navigate(action.path);
                    }}
                    className="flex w-full items-center gap-4 rounded-xl px-4 py-3.5 text-left transition-colors hover:bg-accent"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <span className="text-sm font-semibold text-foreground">{action.title}</span>
                      <p className="text-xs text-muted-foreground">{action.description}</p>
                    </div>
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMenuOpen(false)}
            className="absolute inset-0 top-[4.5rem] z-20 bg-foreground/10 backdrop-blur-sm"
          />
        )}
      </AnimatePresence>

      {/* Hero Content */}
      <div className="flex flex-col items-center px-6 pt-8 text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-primary shadow-lg"
        >
          <Shield className="h-10 w-10 text-primary-foreground" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="font-display text-2xl font-bold text-foreground"
        >
          Verify. Protect. Report.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground"
        >
          Your trusted companion for authenticating products and keeping your community safe.
        </motion.p>

        {/* Quick Action - Primary CTA */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          onClick={() => navigate("/scan")}
          className="mt-8 flex items-center gap-3 rounded-2xl bg-primary px-8 py-4 text-primary-foreground shadow-lg transition-all hover:shadow-xl hover:bg-primary/90"
        >
          <ScanBarcode className="h-5 w-5" />
          <span className="text-sm font-bold">Scan Now</span>
        </motion.button>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-10 grid w-full max-w-sm grid-cols-3 gap-3"
        >
          {[
            { label: "Products", value: "12K+" },
            { label: "Reports", value: "850+" },
            { label: "Users", value: "3.2K" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center rounded-2xl border border-border bg-card p-4 shadow-sm"
            >
              <span className="text-lg font-bold text-primary">{stat.value}</span>
              <span className="text-[11px] text-muted-foreground">{stat.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Tip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-6 flex items-center gap-2 rounded-xl bg-primary/5 px-4 py-3"
        >
          <Zap className="h-4 w-4 text-primary" />
          <span className="text-xs text-muted-foreground">
            Tap the <strong className="text-foreground">☰ menu</strong> to scan, search, report or browse.
          </span>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
