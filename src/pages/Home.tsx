import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ScanBarcode, Search, AlertTriangle, LayoutGrid, Users } from "lucide-react";

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

  return (
    <div className="px-5 pb-6 pt-12">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <p className="text-sm text-muted-foreground">Good morning 👋</p>
          <h1 className="font-display text-xl font-bold text-foreground">What would you like to do?</h1>
        </div>
        <button
          onClick={() => navigate("/signin")}
          className="flex items-center gap-1.5 rounded-lg bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary"
        >
          <Users className="h-3.5 w-3.5" />
          Join community
        </button>
      </div>

      {/* Action Cards */}
      <div className="grid grid-cols-2 gap-3">
        {actions.map((action, i) => {
          const Icon = action.icon;
          return (
            <motion.button
              key={action.title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.35 }}
              onClick={() => navigate(action.path)}
              className="flex flex-col items-start rounded-2xl border border-border bg-card p-5 text-left shadow-sm transition-all hover:shadow-md hover:border-primary/30"
            >
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <span className="text-sm font-semibold text-foreground">{action.title}</span>
              <span className="mt-1 text-[11px] leading-tight text-muted-foreground">{action.description}</span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
