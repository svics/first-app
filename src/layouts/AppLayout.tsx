import { Outlet } from "react-router-dom";
import BottomNav from "@/components/BottomNav";

const AppLayout = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="pb-20">
        <Outlet />
      </div>
      <BottomNav />
    </div>
  );
};

export default AppLayout;
