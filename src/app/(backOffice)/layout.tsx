import Navbar from "@/components/backOffice/Navbar";
import Sidebar from "@/components/backOffice/Sidebar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen w-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <Navbar />

      {/* Main Body */}
      <div className="flex w-full">
        {/* Sidebar */}
        <Sidebar />
        {/* Main */}
        <main className="p-4 w-full">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
