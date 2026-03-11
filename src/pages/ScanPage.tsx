import { motion } from "framer-motion";
import { Camera, Image, Flashlight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ScanPage = () => {
  return (
    <div className="flex min-h-screen flex-col bg-foreground">
      {/* Camera Viewport */}
      <div className="relative flex flex-1 items-center justify-center">
        <div className="absolute inset-0 bg-foreground/80" />

        {/* Scan Frame */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="relative z-10 h-64 w-64"
        >
          {/* Corner markers */}
          <div className="absolute left-0 top-0 h-8 w-8 rounded-tl-2xl border-l-[3px] border-t-[3px] border-primary" />
          <div className="absolute right-0 top-0 h-8 w-8 rounded-tr-2xl border-r-[3px] border-t-[3px] border-primary" />
          <div className="absolute bottom-0 left-0 h-8 w-8 rounded-bl-2xl border-b-[3px] border-l-[3px] border-primary" />
          <div className="absolute bottom-0 right-0 h-8 w-8 rounded-br-2xl border-b-[3px] border-r-[3px] border-primary" />

          {/* Scan line animation */}
          <motion.div
            animate={{ y: [0, 240, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-2 right-2 top-4 h-0.5 bg-primary/60"
          />
        </motion.div>

        <p className="absolute bottom-24 z-10 text-sm text-primary-foreground/70">
          Align barcode within the frame
        </p>
      </div>

      {/* Controls */}
      <div className="bg-foreground px-6 pb-24 pt-4">
        <div className="flex items-center justify-around">
          <button className="flex flex-col items-center gap-1">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-foreground/10">
              <Image className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-[10px] text-primary-foreground/60">Gallery</span>
          </button>

          <Button className="h-16 w-16 rounded-full text-primary-foreground shadow-lg">
            <Camera className="h-7 w-7" />
          </Button>

          <button className="flex flex-col items-center gap-1">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-foreground/10">
              <Flashlight className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-[10px] text-primary-foreground/60">Flash</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScanPage;
