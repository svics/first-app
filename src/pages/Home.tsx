import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ScanBarcode, Search, AlertTriangle, LayoutGrid, ChevronRight, TrendingUp, Star } from "lucide-react";

const actions = [
  {
    icon: ScanBarcode,
    title: "Scan a Product",
    description: "Use your camera to scan barcodes",
    path: "/scan",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Search,
    title: "Find a Product",
    description: "Search by name, brand or category",
    path: "/search",
    color: "bg-info/10 text-info",
  },
  {
    icon: AlertTriangle,
    title: "Report a Product",
    description: "Flag counterfeit or expired items",
    path: "/report",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: LayoutGrid,
    title: "Browse Categories",
    description: "Explore products by category",
    path: "/search",
    color: "bg-success/10 text-success",
  },
];

const trendingProducts = [
  { name: "Organic Face Cream", brand: "NatureCo", rating: 4.8 },
  { name: "Wireless Earbuds Pro", brand: "SoundMax", rating: 4.6 },
  { name: "Vitamin D3 Supplement", brand: "HealthPlus", rating: 4.9 },
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
          onClick={() => navigate("/signup")}
          className="rounded-lg bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary"
        >
          Sign Up
        </button>
      </div>

      {/* Action Cards */}
      <div className="mb-8 grid grid-cols-2 gap-3">
        {actions.map((action, i) => {
          const Icon = action.icon;
          return (
            <motion.button
              key={action.title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.35 }}
              onClick={() => navigate(action.path)}
              className="flex flex-col items-start rounded-2xl bg-card p-4 text-left shadow-sm transition-shadow hover:shadow-md"
            >
              <div className={`mb-3 flex h-10 w-10 items-center justify-center rounded-xl ${action.color}`}>
                <Icon className="h-5 w-5" />
              </div>
              <span className="text-sm font-semibold text-foreground">{action.title}</span>
              <span className="mt-0.5 text-[11px] leading-tight text-muted-foreground">{action.description}</span>
            </motion.button>
          );
        })}
      </div>

      {/* Trending Section */}
      <div>
        <div className="mb-3 flex items-center justify-between">
          <h2 className="flex items-center gap-1.5 font-display text-base font-bold text-foreground">
            <TrendingUp className="h-4 w-4 text-primary" /> Trending
          </h2>
          <button className="flex items-center text-xs font-medium text-primary">
            See all <ChevronRight className="h-3 w-3" />
          </button>
        </div>

        <div className="space-y-2.5">
          {trendingProducts.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.08 }}
              className="flex items-center gap-3 rounded-xl bg-card p-3 shadow-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-muted">
                <ScanBarcode className="h-5 w-5 text-muted-foreground" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-foreground">{product.name}</p>
                <p className="text-xs text-muted-foreground">{product.brand}</p>
              </div>
              <div className="flex items-center gap-0.5 text-xs font-medium text-accent">
                <Star className="h-3 w-3 fill-current" />
                {product.rating}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
