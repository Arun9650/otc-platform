import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MasterWrapper from "@/components/wrappers/master-wrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OTC Platform",
  description: "OTC app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MasterWrapper>
        {children}
        </MasterWrapper>
        </body>
    </html>
  );
}
