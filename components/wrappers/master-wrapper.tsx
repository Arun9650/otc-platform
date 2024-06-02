import React from "react";
import W3MWrapper from "@/components/wrappers/w3m-wrapper";
import { Toaster } from "@/components/ui/sonner";

const MasterWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
      <W3MWrapper>
        {children}
        <Toaster richColors />
      </W3MWrapper>

  );
};

export default MasterWrapper;
