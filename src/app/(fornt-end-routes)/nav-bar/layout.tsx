"use client";
import { useEffect } from "react";
export default function NavLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    console.log("NavLayout mounted");
    return () => {
      console.log("NavLayout unmounted");
    };
  }, []);
  return (
  
   <section>
    {children}
   </section>
     
  );
}