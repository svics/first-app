import { useState } from "react";
import { motion } from "framer-motion";
import { AlertTriangle, Camera, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const issueTypes = ["Counterfeit", "Expired", "Damaged", "Mislabeled", "Other"];

const ReportPage = () => {
  const [selectedIssue, setSelectedIssue] = useState("");

  return (
    <div className="px-5 pb-6 pt-12">
      <h1 className="mb-1 font-display text-xl font-bold text-foreground">Report a Product</h1>
      <p className="mb-6 text-xs text-muted-foreground">Help us keep the marketplace safe</p>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-5"
      >
        <div className="space-y-2">
          <Label>Product Name</Label>
          <Input placeholder="Enter product name" className="h-11 rounded-xl" />
        </div>

        <div className="space-y-2">
          <Label>Issue Type</Label>
          <div className="flex flex-wrap gap-2">
            {issueTypes.map((type) => (
              <button
                key={type}
                onClick={() => setSelectedIssue(type)}
                className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                  selectedIssue === type
                    ? "bg-primary text-primary-foreground"
                    : "bg-card text-muted-foreground shadow-sm"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <Label>Description</Label>
          <Textarea placeholder="Describe the issue in detail..." className="min-h-[100px] rounded-xl" />
        </div>

        <button className="flex w-full items-center justify-center gap-2 rounded-xl border-2 border-dashed border-border py-8 text-sm text-muted-foreground">
          <Camera className="h-5 w-5" />
          Add Photos
        </button>

        <Button className="h-12 w-full rounded-xl text-base font-semibold">
          <Send className="mr-2 h-4 w-4" />
          Submit Report
        </Button>
      </motion.div>
    </div>
  );
};

export default ReportPage;
