
import RootLayout from "@/components/layouts/Rootlayout";

interface SiteLayoutProps {
  children: React.ReactNode;
}

export default function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className="min-h-screen">
        <RootLayout>
          {children}
          </RootLayout>
    </div>
  );
}
