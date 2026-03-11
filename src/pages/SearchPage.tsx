import { useState } from "react";
import { motion } from "framer-motion";
import { Search, SlidersHorizontal, ScanBarcode } from "lucide-react";
import { Input } from "@/components/ui/input";

const categories = ["All", "Electronics", "Health", "Beauty", "Food", "Home"];

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <div className="px-5 pb-6 pt-12">
      <h1 className="mb-5 font-display text-xl font-bold text-foreground">Search Products</h1>

      <div className="mb-5 flex gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search by name, brand, or barcode..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="h-11 rounded-xl pl-10"
          />
        </div>
        <button className="flex h-11 w-11 items-center justify-center rounded-xl bg-card shadow-sm">
          <SlidersHorizontal className="h-4 w-4 text-foreground" />
        </button>
      </div>

      {/* Categories */}
      <div className="mb-6 flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`shrink-0 rounded-lg px-4 py-1.5 text-xs font-medium transition-colors ${
              activeCategory === cat
                ? "bg-primary text-primary-foreground"
                : "bg-card text-muted-foreground"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Empty State */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col items-center py-16 text-center"
      >
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-muted">
          <ScanBarcode className="h-8 w-8 text-muted-foreground" />
        </div>
        <p className="font-display text-base font-semibold text-foreground">Start searching</p>
        <p className="mt-1 max-w-[200px] text-xs text-muted-foreground">
          Type a product name, brand, or scan a barcode to find products
        </p>
      </motion.div>
    </div>
  );
};

export default SearchPage;
