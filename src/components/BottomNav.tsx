import { useLocation, useNavigate } from "react-router-dom";
import { Home, Search, ScanBarcode, Settings } from "lucide-react";

const tabs = [
  { path: "/home", label: "Home", icon: Home },
  { path: "/search", label: "Search", icon: Search },
  { path: "/scan", label: "Scan", icon: ScanBarcode },
  { path: "/profile", label: "Settings", icon: Settings },
];

const BottomNav = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-card pb-[env(safe-area-inset-bottom)]">
      <div className="mx-auto flex max-w-lg items-center justify-around py-2">
        {tabs.map((tab) => {
          const isActive = location.pathname === tab.path;
          const Icon = tab.icon;
          const isScan = tab.path === "/scan";

          return (
            <button
              key={tab.path}
              onClick={() => navigate(tab.path)}
              className={`flex flex-col items-center gap-0.5 px-3 py-1 transition-colors ${
                isScan
                  ? ""
                  : isActive
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
            >
              {isScan ? (
                <div className="flex h-12 w-12 -translate-y-2 items-center justify-center rounded-2xl bg-primary shadow-lg">
                  <Icon className="h-6 w-6 text-primary-foreground" />
                </div>
              ) : (
                <>
                  <Icon className="h-5 w-5" />
                  <span className="text-[10px] font-medium">{tab.label}</span>
                </>
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
