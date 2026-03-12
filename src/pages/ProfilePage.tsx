import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Lock,
  HelpCircle,
  LogOut,
  ChevronRight,
  Shield,
  FileText,
  CheckCircle,
  Clock,
  Eye,
  Image,
  Trash2,
  PauseCircle,
  Download,
  Monitor,
  BellRing,
  MessageSquare,
  Smartphone,
  Inbox,
  UserCircle,
  Type,
  AlignLeft,
  Menu,
  X,
  ChevronDown,
  Settings,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const profileSections = [
  {
    title: "Account",
    items: [
      { icon: User, label: "Username", value: "johndoe" },
      { icon: Mail, label: "Email", value: "john@example.com" },
      { icon: Phone, label: "Phone", value: "+1 234 567 890" },
      { icon: MapPin, label: "Country", value: "United States" },
      { icon: FileText, label: "T&C Version", value: "v2.1" },
      { icon: CheckCircle, label: "T&C Accepted", value: "Yes" },
      { icon: Clock, label: "Status", value: "Complete", badge: "complete" },
    ],
  },
  {
    title: "Profile",
    items: [
      { icon: User, label: "First Name", value: "John" },
      { icon: User, label: "Last Name", value: "Doe" },
      { icon: Type, label: "Display Name", value: "JohnD" },
      { icon: Phone, label: "Phone", value: "+1 234 567 890" },
      { icon: AlignLeft, label: "Bio", value: "Retail enthusiast" },
    ],
  },
  {
    title: "Visibility",
    items: [
      { icon: Eye, label: "Display Name", value: "Public" },
      { icon: Image, label: "Avatar", value: "Public" },
    ],
  },
  {
    title: "Security",
    items: [
      { icon: Lock, label: "Change Password", value: "" },
      { icon: Shield, label: "Two-Factor Auth", value: "Enabled" },
      { icon: Mail, label: "Email", value: "john@example.com" },
      { icon: Trash2, label: "Delete Account", value: "", destructive: true },
      { icon: PauseCircle, label: "Deactivate Account", value: "", destructive: true },
      { icon: Download, label: "Export My Data", value: "" },
    ],
  },
  {
    title: "Sessions",
    items: [
      { icon: Monitor, label: "Current Session", value: "This device", badge: "active" },
    ],
  },
  {
    title: "Preferences",
    items: [
      { icon: BellRing, label: "Push Notifications", value: "On", toggle: true },
      { icon: Mail, label: "Email Notifications", value: "On", toggle: true },
      { icon: Smartphone, label: "Phone Notifications", value: "Off", toggle: true },
      { icon: Inbox, label: "In-App Notifications", value: "On", toggle: true },
      { icon: HelpCircle, label: "Help & Support", value: "" },
    ],
  },
];

const recentHistory = [
  { action: "Scanned", product: "Organic Face Cream", time: "2 hours ago" },
  { action: "Searched", product: "Wireless Earbuds", time: "Yesterday" },
  { action: "Reported", product: "Expired Supplement", time: "3 days ago" },
];

const ProfilePage = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [toggles, setToggles] = useState<Record<string, boolean>>({
    "Push Notifications": true,
    "Email Notifications": true,
    "Phone Notifications": false,
    "In-App Notifications": true,
  });

  const handleToggle = (label: string) => {
    setToggles((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  const handleSectionSelect = (title: string) => {
    setActiveSection(title);
    setMenuOpen(false);
  };

  const currentSections = activeSection
    ? profileSections.filter((s) => s.title === activeSection)
    : profileSections;

  return (
    <div className="px-5 pb-6 pt-12">
      {/* Top Bar */}
      <div className="mb-6 flex items-center justify-between">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card transition-colors hover:bg-muted/50"
        >
          {menuOpen ? (
            <X className="h-5 w-5 text-foreground" />
          ) : (
            <Menu className="h-5 w-5 text-foreground" />
          )}
        </button>
        <div className="flex items-center gap-2">
          <Settings className="h-4 w-4 text-primary" />
          <h1 className="font-display text-lg font-bold text-foreground">Settings</h1>
        </div>
        <div className="w-10" />
      </div>

      {/* Collapsible Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mb-5 overflow-hidden rounded-xl border border-border bg-card"
          >
            <button
              onClick={() => {
                setActiveSection(null);
                setMenuOpen(false);
              }}
              className={`flex w-full items-center gap-3 px-4 py-3 text-left transition-colors hover:bg-muted/50 ${
                !activeSection ? "bg-primary/5 text-primary" : "text-foreground"
              }`}
            >
              <Settings className="h-4 w-4" />
              <span className="flex-1 text-sm font-medium">All Settings</span>
              {!activeSection && (
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              )}
            </button>
            {profileSections.map((section) => {
              const isActive = activeSection === section.title;
              return (
                <button
                  key={section.title}
                  onClick={() => handleSectionSelect(section.title)}
                  className={`flex w-full items-center gap-3 border-t border-border px-4 py-3 text-left transition-colors hover:bg-muted/50 ${
                    isActive ? "bg-primary/5 text-primary" : "text-foreground"
                  }`}
                >
                  <ChevronRight className={`h-4 w-4 transition-transform ${isActive ? "rotate-90 text-primary" : "text-muted-foreground"}`} />
                  <span className="flex-1 text-sm font-medium">{section.title}</span>
                  {isActive && (
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  )}
                </button>
              );
            })}
            <button
              onClick={() => {
                setActiveSection(null);
                setMenuOpen(false);
              }}
              className="flex w-full items-center gap-3 border-t border-border px-4 py-3 text-left transition-colors hover:bg-muted/50 text-foreground"
            >
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span className="flex-1 text-sm font-medium">Recent History</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Avatar */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6 flex flex-col items-center"
      >
        <div className="mb-3 flex h-20 w-20 items-center justify-center rounded-full bg-primary">
          <UserCircle className="h-10 w-10 text-primary-foreground" />
        </div>
        <h2 className="font-display text-lg font-bold text-foreground">John Doe</h2>
        <p className="text-xs text-muted-foreground">Member since 2024</p>
      </motion.div>

      {/* History Section */}
      {(!activeSection || activeSection === null) && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="mb-5"
        >
          <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Recent History
          </h3>
          <div className="overflow-hidden rounded-xl border border-border bg-card">
            {recentHistory.map((item, i) => (
              <div
                key={i}
                className={`flex items-center gap-3 px-4 py-3 ${
                  i > 0 ? "border-t border-border" : ""
                }`}
              >
                <Clock className="h-4 w-4 text-primary" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">
                    {item.action} <span className="text-muted-foreground">{item.product}</span>
                  </p>
                </div>
                <span className="text-[11px] text-muted-foreground">{item.time}</span>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Sections */}
      <div className="space-y-5">
        {currentSections.map((section, sIdx) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 + sIdx * 0.06 }}
          >
            <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {section.title}
            </h3>
            <div className="overflow-hidden rounded-xl border border-border bg-card">
              {section.items.map((item, i) => {
                const Icon = item.icon;
                const isDestructive = "destructive" in item && item.destructive;
                const isToggle = "toggle" in item && item.toggle;
                const isOn = toggles[item.label];

                return (
                  <button
                    key={item.label + i}
                    onClick={isToggle ? () => handleToggle(item.label) : undefined}
                    className={`flex w-full items-center gap-3 px-4 py-3.5 text-left transition-colors hover:bg-muted/50 ${
                      i > 0 ? "border-t border-border" : ""
                    }`}
                  >
                    <Icon
                      className={`h-4 w-4 ${
                        isDestructive ? "text-primary" : "text-muted-foreground"
                      }`}
                    />
                    <span
                      className={`flex-1 text-sm font-medium ${
                        isDestructive ? "text-primary" : "text-foreground"
                      }`}
                    >
                      {item.label}
                    </span>

                    {"badge" in item && item.badge === "complete" && (
                      <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold text-primary">
                        Complete
                      </span>
                    )}
                    {"badge" in item && item.badge === "active" && (
                      <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold text-primary">
                        Active
                      </span>
                    )}

                    {isToggle ? (
                      <div
                        className={`relative h-5 w-9 rounded-full transition-colors ${
                          isOn ? "bg-primary" : "bg-muted-foreground/30"
                        }`}
                      >
                        <div
                          className={`absolute top-0.5 h-4 w-4 rounded-full bg-primary-foreground shadow transition-transform ${
                            isOn ? "translate-x-4" : "translate-x-0.5"
                          }`}
                        />
                      </div>
                    ) : (
                      <>
                        {item.value && !("badge" in item) && (
                          <span className="text-xs text-muted-foreground">{item.value}</span>
                        )}
                        <ChevronRight className="h-4 w-4 text-muted-foreground" />
                      </>
                    )}
                  </button>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>

      {/* No Other Sessions */}
      {(!activeSection || activeSection === "Sessions") && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-2 rounded-xl border border-border bg-card px-4 py-3 text-center text-xs text-muted-foreground"
        >
          No other active sessions
        </motion.div>
      )}

      {/* Logout */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.55 }}
        onClick={() => navigate("/")}
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-primary/10 py-3.5 text-sm font-semibold text-primary"
      >
        <LogOut className="h-4 w-4" />
        Sign Out
      </motion.button>
    </div>
  );
};

export default ProfilePage;
