import React from "react";
import LeftSidebar from "@/components/shared/LeftSidebar";

const ServicerLayout = ({ children }) => {
  return (
    <div className="w-full md:flex">
      <LeftSidebar />
      <main className="flex flex-1 h-full">{children}</main>
    </div>
  );
};

export default ServicerLayout;
