import React from "react";
import Web3ModalProvider from "@/components/providers/w3m-provider";
import { cookieToInitialState } from "wagmi";
import { config } from "@/components/config/wagmi-config";
import { headers } from "next/headers";

const W3MWrapper = ({ children }: { children: React.ReactNode }) => {
  const initialState = cookieToInitialState(config, headers().get("cookie"));
  return (
    <Web3ModalProvider initialState={initialState}>
      {children}
    </Web3ModalProvider>
  );
};

export default W3MWrapper;
