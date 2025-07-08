
'use client';
import "./globals.css";
import { AuthProvider } from "../contexts/useContext";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import { SessionProvider } from 'next-auth/react';
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
         <SessionProvider>
        <Header />
       
        <AuthProvider>{children}</AuthProvider>
        <Footer/>
        </SessionProvider>

      </body>
    </html>
  );
}
