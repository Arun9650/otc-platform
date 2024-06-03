'use client'
import React, { useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { walletAddressShortn } from "@/lib/action";
// import { useLoginUser } from "@/hooks/mutation";
import { isAddress } from "viem";
// import { FaArrowDown, FaArrowUp } from "react-icons/fa";
// import { Ellipse } from "@/components/icons";
import { cn } from "@/lib/utils";
import { useAccount } from 'wagmi'
import { useWeb3Modal } from "@web3modal/wagmi/react";

const Navbar = () => {
  const { address, isConnected, chain } = useAccount();
  // console.log("🚀 ~ Navbar ~ address:", address)
  const { open } = useWeb3Modal();



  return (
    <div
      className={cn(
        "sticky top-0 z-10 flex flex-row items-center justify-between border-b-2 border-black bg-white px-8 py-4 dark:border-slate-400 dark:bg-black",
      )}
    >
      <div className="block lg:hidden">
        {/* <Ellipse /> */}
      </div>
      <div className="flex flex-row items-center text-base font-medium ">
        <div className="flex items-center gap-2 rounded-md bg-[#F2F2F2]  px-3 py-1 hover:bg-gray-400/30">
          <div className={`h-3 w-3 animate-pulse rounded-full bg-[#FFD951] `} />
          <p className="text-base font-medium text-black dark:text-white ">
            OTK : $4.32
          </p>
          {/* <FaArrowUp className="text-green-500" /> */}
        </div>
      </div>
      <div className="flex w-fit flex-row items-center">
        <div className="xs-m:text-base flex flex-row items-center justify-end gap-2 text-sm sm:gap-3 md:gap-4  md:pl-12 xl:gap-6">
          {/* redirect uri */}
          {/* <Button  className="rounded-[4px]">
            Mini Market 
          </Button> */}
        {address && chain && (
          <Button  className="rounded-[4px]" >
            {chain.name}
            ad
          </Button>
         )} 
        <Button  className="rounded-[4px]" onClick={() => open()}>
          {address ? walletAddressShortn(address) : "Connect Wallet"}
          adf
        </Button>
        </div>
        <div
          className="xs:ml-3 ml-2 cursor-pointer rounded-sm text-2xl transition-all delay-200 sm:ml-4 lg:hidden"
          onClick={() => {}}
        ></div>
      </div>
    </div>
  );
};

export default Navbar;
