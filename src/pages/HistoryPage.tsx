import { motion } from "framer-motion";
import { Clock, ScanBarcode, Search, AlertTriangle } from "lucide-react";

const historyItems = [
  { type: "scan", title: "Organic Face Cream", brand: "NatureCo", time: "2 hours ago", icon: ScanBarcode },
  { type: "search", title: "Wireless Earbuds", brand: "SoundMax", time: "5 hours ago", icon: Search },
  { type: "report", title: "Fake Perfume", brand: "Unknown", time: "Yesterday", icon: AlertTriangle },
  { type: "scan", title: "Vitamin D3 Supplement", brand: "HealthPlus", time: "2 days ago", icon: ScanBarcode },
];

const typeColors: Record<string, string> = {
  scan: "bg-primary/10 text-primary",
  search: "bg-info/10 text-info",
  report: "bg-accent/10 text-accent",
};

const HistoryPage = () => {
  return (
    <div className="px-5 pb-6 pt-12">
      <h1 className="mb-5 font-display text-xl font-bold text-foreground">History</h1>

      <div className="space-y-2.5">
        {historyItems.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
              className="flex items-center gap-3 rounded-xl bg-card p-3.5 shadow-sm"
            >
              <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${typeColors[item.type]}`}>
                <Icon className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-foreground">{item.title}</p>
                <p className="text-xs text-muted-foreground">{item.brand}</p>
              </div>
              <div className="flex items-center gap-1 text-[10px] text-muted-foreground">
                <Clock className="h-3 w-3" />
                {item.time}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default HistoryPage;
