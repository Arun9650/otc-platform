"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  marketPlace,
  onDemand,
  trades,
} from "@/components/globals/Sidebar/SidebarItems";
import { Separator } from "@/components/ui/separator";
import SidebarSection from "@/components/globals/Sidebar/SidebarSection";
// import { GotoArrowCircle, OTCLayerIcon, RewardsGift } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
// import { useAtom } from "jotai";
// import { sidebarLinkAtom } from "@/atom";

export default function Sidebar() {
  const [activeLink, setActiveLink] = useState('');
  const router = useRouter();
  return (
    <div
      className="flex h-screen w-[282px] flex-col items-center border-r-2 border-white border-opacity-10 bg-black pb-10 pl-5 text-xs font-bold"
      style={{ zIndex: 100 }}
    >
      <div className="-ml-2 mb-8 mt-5 flex items-center justify-center gap-4 pr-5">
        {/* <OTCLayerIcon /> */}
        <span className="font-p2p text-xl font-normal uppercase leading-5 -tracking-[0.02em] text-white">
          Otc&nbsp;Layer
        </span>
      </div>
      <ScrollArea className="h-[calc(100vh-150px)] w-full pb-3 pr-5 text-white">
        <div className="flex w-full flex-col items-center">
          <div className="w-full">
            <div className="mb-4 text-start text-xs">MARKET&nbsp;PLACE</div>
            <SidebarSection
              activeLink={activeLink}
              setActiveLink={setActiveLink}
              section={marketPlace}
            />
          </div>
          <Separator className="my-3 w-[200px] border-white" />
          <div className="w-full">
            <SidebarSection
              activeLink={activeLink}
              setActiveLink={setActiveLink}
              section={onDemand}
            />
          </div>
          <Separator className="my-3 w-[200px] border-white" />
          <div className="w-full">
            <div className="my-4 text-start text-xs">CREATED&nbsp;TRADES</div>
            <SidebarSection
              activeLink={activeLink}
              setActiveLink={setActiveLink}
              section={trades}
            />
          </div>
          <Separator className="my-3 w-[200px] border-white" />
        </div>
      </ScrollArea>
      <Button
        onClick={() => {
          setActiveLink("/rewards");
          router.push("/rewards");
        }}
        className="relative mr-5 h-[48px] w-[202px] gap-1 rounded-[8px] bg-[#EED1FF] text-base font-medium text-black hover:bg-[#EED1FF]/50"
      >
        {/* <RewardsGift /> */}
        Rewards
        {/* <GotoArrowCircle className="absolute -top-[35%]" /> */}
      </Button>
    </div>
  );
}
