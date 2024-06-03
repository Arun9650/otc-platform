"use client";

import { Button } from "@/components/ui/button";
import { walletAddressShortn } from "@/lib/action";
import React, { useEffect } from "react";
import { useAccount } from "wagmi";

export default function NFTMarket() {
  const {address} = useAccount();

  return (
    <div className="flex flex-col gap-6">
      <div className="mb-4 text-2xl font-bold -tracking-[0.04em] text-[#666666]">
        NFT Market
      </div>
    </div>
  );
}
