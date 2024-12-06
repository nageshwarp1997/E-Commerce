import React from "react";

const Heading = ({ text, className }: { text: string; className?: string }) => {
  return (
    <div className={`text-xl font-bold text-gray-300 ${className}`}>
      <p>{text}</p>
    </div>
  );
};

export default Heading;
