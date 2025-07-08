'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useRouter, redirect } from 'next/navigation';
import { signOut, useSession } from "next-auth/react";

export default function Header() {
  const router = useRouter();
    const { data: session, status } = useSession();
  console.log('session', session);

  console.log('status', status);
  
  const signup = () => {
    console.log("signup");
    router.replace("/register");
  };

   const handleLogout = async () => {
    await signOut({
      redirect: true,
      callbackUrl: "/login", // redirect to login after logout
    });
  };

  const login = () => {
    console.log("login");
    redirect("/login");
  };



  return (
    <header className="sticky top-0 z-50 bg-slate-800 shadow-md">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/GWL.jfif"
            width={40}
            height={40}
            alt="GWL Logo"
            className="rounded-full"
          />
       
        </Link>

        {/* Navigation */}
        <nav className="hidden lg:flex gap-2 flex-wrap">
          <HeaderLink href="/client-data" label="Data-Fetching" />
         {status === "authenticated" &&  <HeaderLink href="/profile" label="Profile" />} 
          <HeaderLink href="/about" label="About" />
       
          <HeaderLink href="/products/1" label="Product 1 (Error Example)" />
          <HeaderLink href="/products/2" label="Product 2" />
          <HeaderLink href="/nav-bar" label="Template Re-render" />
          <HeaderLink href="/blog" label="Loading Status with Blog" />
          <HeaderLink href="/complex-dashboard" label="Parallel Route" />
          <HeaderLink href="/i1" label="Intercept Route" />
          <HeaderLink href="/blink" label="E-commerce Site" />
        </nav>

        {/* Auth Buttons */}
        <div className="flex gap-2">
             <div>
    {(status === "unauthenticated") && 
      <div className="flex gap-2">
        <button
          onClick={signup}
          className="bg-amber-400 hover:bg-amber-500 text-black px-4 py-2 rounded-xl transition cursor-pointer"
        >
          Register
        </button>
        <button
          onClick={login}
          className="bg-amber-400 hover:bg-amber-500 text-black px-4 py-2 rounded-xl transition cursor-pointer"
        >
          Login
        </button>
      </div>
     }
     {(status === "authenticated") && (
      <button
        onClick={handleLogout}
        className="bg-red-500 hover:bg-red-600 text-white px-8 py-2 rounded-xl transition cursor-pointer"
      >
        Logout
      </button>
    )}
        </div>
           
        </div>
      </div>

      {/* Scrollable nav on small screens */}
      <div className="lg:hidden overflow-x-auto bg-slate-700 text-white text-sm px-4 py-2 whitespace-nowrap">
        <div className="flex gap-4 flex-wrap">
          <HeaderLink href="/client-data" label="Data-Fetching" />
          <HeaderLink href="/profile" label="Profile" />
          <HeaderLink href="/about" label="About" />
         
          <HeaderLink href="/products/1" label="Product 1" />
          <HeaderLink href="/products/2" label="Product 2" />
          <HeaderLink href="/nav-bar" label="Re-render" />
          <HeaderLink href="/blog" label="Blog" />
          <HeaderLink href="/complex-dashboard" label="Complex" />
          <HeaderLink href="/i1" label="Intercept" />
          <HeaderLink href="/blink" label="E-commerce" />
        </div>
      </div>
    </header>
  );
}

function HeaderLink({ href, label }: Readonly<{ href: string; label: string }>) {
  return (
    <Link
      href={href}
      className=" text-white hover:bg-amber-400 hover:text-black px-3 py-2 rounded-md font-medium transition"
    >
      {label}
    </Link>
  );
}
