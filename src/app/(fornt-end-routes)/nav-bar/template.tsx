
'use client';
import Link from "next/link"; 
import { useEffect } from "react";
export default function NavLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    console.log("templete mounted");
    return () => {
      console.log("template unmounted");
    };
  }, []);
  return (
    <div>
    <nav className="flex gap-4 p-4 bg-amber-600">
   <Link href="/nav-bar/tab-one">Tab One</Link>
   <Link href="/nav-bar/tab-two">Tab Two</Link>
   </nav>
   <section>
    {children}
   </section>
     </div>
  );
}