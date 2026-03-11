import { motion } from "framer-motion";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Lock,
  Bell,
  HelpCircle,
  LogOut,
  ChevronRight,
  Shield,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const profileSections = [
  {
    title: "Account",
    items: [
      { icon: User, label: "Username", value: "johndoe", action: true },
      { icon: Mail, label: "Email", value: "john@example.com", action: true },
      { icon: Phone, label: "Phone", value: "+1 234 567 890", action: true },
      { icon: MapPin, label: "Location", value: "New York, US", action: true },
    ],
  },
  {
    title: "Security",
    items: [
      { icon: Lock, label: "Change Password", value: "", action: true },
      { icon: Shield, label: "Two-Factor Auth", value: "Enabled", action: true },
    ],
  },
  {
    title: "Preferences",
    items: [
      { icon: Bell, label: "Notifications", value: "On", action: true },
      { icon: HelpCircle, label: "Help & Support", value: "", action: true },
    ],
  },
];

const ProfilePage = () => {
  const navigate = useNavigate();

  return (
    <div className="px-5 pb-6 pt-12">
      {/* Avatar */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6 flex flex-col items-center"
      >
        <div className="mb-3 flex h-20 w-20 items-center justify-center rounded-full bg-primary">
          <User className="h-10 w-10 text-primary-foreground" />
        </div>
        <h2 className="font-display text-lg font-bold text-foreground">John Doe</h2>
        <p className="text-xs text-muted-foreground">Member since 2024</p>
      </motion.div>

      {/* Sections */}
      <div className="space-y-5">
        {profileSections.map((section, sIdx) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: sIdx * 0.08 }}
          >
            <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {section.title}
            </h3>
            <div className="overflow-hidden rounded-xl bg-card shadow-sm">
              {section.items.map((item, i) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.label}
                    className={`flex w-full items-center gap-3 px-4 py-3.5 text-left transition-colors hover:bg-muted/50 ${
                      i > 0 ? "border-t border-border" : ""
                    }`}
                  >
                    <Icon className="h-4 w-4 text-muted-foreground" />
                    <span className="flex-1 text-sm font-medium text-foreground">{item.label}</span>
                    {item.value && (
                      <span className="text-xs text-muted-foreground">{item.value}</span>
                    )}
                    {item.action && <ChevronRight className="h-4 w-4 text-muted-foreground" />}
                  </button>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Logout */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        onClick={() => navigate("/")}
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-destructive/10 py-3.5 text-sm font-semibold text-destructive"
      >
        <LogOut className="h-4 w-4" />
        Sign Out
      </motion.button>
    </div>
  );
};

export default ProfilePage;
