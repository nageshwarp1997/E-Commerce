import LargeCards from "@/components/backOffice/dashboard/LargeCards";
import Heading from "@/components/backOffice/Heading";
import React from "react";

const page = () => {
  return (
    <div className="w-full">
      <Heading text="Dashboard Overview" />
      {/* Large Cards */}
      <LargeCards/>
      {/* Small Cards */}
      {/* Charts */}
      {/* Recent Orders Table */}
    </div>
  );
};

export default page;
