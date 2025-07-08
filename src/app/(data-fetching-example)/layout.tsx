

import DashboardHeader from "@/components/dashboard/dashboard";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <>
        <DashboardHeader />
       
       {children}
        
</>
  );
}
