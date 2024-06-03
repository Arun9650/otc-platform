// import { DirectOTCMarket as DirectOTCMarketIcon } from "@/components/icons";
// import { CrossChainOTCMarket as CrossChainOTCMarketIcon } from "@/components/icons";
// import { PointsMarket as PointsMarketIcon } from "@/components/icons";
// import { PreMarket as PreMarketIcon } from "@/components/icons";
// import { NFTMarket as NFTMarketIcon } from "@/components/icons";
// import { Staking as StakingIcon } from "@/components/icons";
// import { DexSwap as DexSwapIcon } from "@/components/icons";
// import { DirectOTCTrades as DirectOTCTradesIcon } from "@/components/icons";
// import { CrossChainOTCTrades as CrossChainOTCTradesIcon } from "@/components/icons";
// import { NFTTrades as NFTTradesIcon } from "@/components/icons";

export const marketPlace = [
  {
    redirectUrl: "/market/direct",
    title: "Direct OTC Market",
    // icon: <DirectOTCMarketIcon />,
  },
  {
    redirectUrl: "/market/cross",
    title: "Cross-Chain OTC Market",
    // icon: <CrossChainOTCMarketIcon />,
  },
  // {
  //   redirectUrl: "/market/points",
  //   title: "Points Market",
  //   // icon: <PointsMarketIcon />,
  // },
  // {
  //   redirectUrl: "/market/pre",
  //   title: "Pre Market",
  //   // icon: <PreMarketIcon />,
  // },
  {
    redirectUrl: "/market/nft",
    title: "NFT Market",
    // icon: <NFTMarketIcon />,
  },
];

export const onDemand = [
  {
    redirectUrl: "/ondemand/staking",
    title: "Staking",

    // icon: <StakingIcon />,
  },
  { redirectUrl: "/ondemand/dex", title: "Dex Swap",
//    icon: <DexSwapIcon />
 },
];

export const trades = [
  {
    redirectUrl: "/trades/direct",
    title: "Direct OTC Trades",
    // icon: <DirectOTCTradesIcon />,
  },
  {
    redirectUrl: "/trades/cross",
    title: "Cross-Chain OTC Trades",
    // icon: <CrossChainOTCTradesIcon />,
  },
  // {
  //   redirectUrl: "/trades/points",
  //   title: "Points Trades",
  //   // icon: <DirectOTCMarketIcon />,
  // },
  // {
  //   redirectUrl: "/trades/pre",
  //   title: "Pre Market Trades",
  //   // icon: <DirectOTCMarketIcon />,
  // },
  {
    redirectUrl: "/trades/nft",
    title: "NFT Trades",
    // icon: <NFTTradesIcon />,
  },
];
