import Sidebar from "@/components/globals/Sidebar";
import { Separator } from "@/components/ui/separator";
import Navbar from "@/components/globals/navbar";
import BgImage from "@/components/ui/bg-image.svg";
import Image from "next/image";
import { ScrollArea } from "../ui/scroll-area";
const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex h-screen flex-1 flex-col">
        <Navbar />
        <Separator className="h-[2px] bg-white bg-opacity-10" />
        <ScrollArea className="relative h-screen">
          <div className="flex-1 p-10 pb-0 pl-[93px]">{children}</div>
          <Image
            src={BgImage}
            alt="background"
            fill
            className="-z-10 bg-[#F9F4F0] object-cover"
          />
        </ScrollArea>
      </div>
    </div>
  );
};

export default RootLayout;
