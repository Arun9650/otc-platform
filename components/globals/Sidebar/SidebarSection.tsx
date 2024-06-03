"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useRouter } from "next/navigation";

type TSection = { redirectUrl: string; title: string; icon: JSX.Element };

type TSidebarSection = {
  section: TSection[];
  activeLink: string;
  setActiveLink: React.Dispatch<React.SetStateAction<string>>;
};

export default function SidebarSection({
  section,
  activeLink,
  setActiveLink,
}: TSidebarSection) {
  const router = useRouter();
  return section.map(({ redirectUrl, icon, title }, index) => (
    <Link
      className={cn(
        "my-3 flex h-[48px] w-full items-center gap-2 rounded-[8px] border border-transparent stroke-white py-2 pl-5 pr-3 text-base font-medium leading-5",
        activeLink === redirectUrl
          ? "bg-[#C0E149] stroke-black text-black"
          : "hover:bg-[#C0E149] hover:stroke-black hover:text-black",
      )}
      key={index}
      href={redirectUrl}
      onClick={(e) => {
        e.preventDefault();
        setActiveLink(redirectUrl);
        router.push(redirectUrl);
      }}
    >
      {icon}
      {title}
    </Link>
  ));
}
