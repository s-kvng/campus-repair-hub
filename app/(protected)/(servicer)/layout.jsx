import React from "react";
import LeftSidebar from "@/components/shared/LeftSidebar";

const ServicerLayout = ({ children }) => {
  return (
    <div className="w-full md:flex">
      <LeftSidebar />
      <main className="flex flex-1 min-h-screen  overflow-scroll">
        {children}
      </main>
    </div>
  );
};

export default ServicerLayout;
