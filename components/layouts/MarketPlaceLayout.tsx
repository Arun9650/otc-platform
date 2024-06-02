import React from "react";

export default function MarketPlacelayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-[20px] font-medium leading-6">
      <div className="mb-8 mt-6 text-[32px] font-bold text-black">
        Market Place
      </div>
      {children}
    </div>
  );
}
