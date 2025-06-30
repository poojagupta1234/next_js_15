
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Dashboard() {

  const navBar = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Settings", href: "/settings" },
    { name: "Profile", href: "/profile" },
     { name: "Client data", href: "/client-data" },
    { name: "Server data", href: "/server-data" },
    { name: "Sequential data", href: "/sequential-data" },
    { name: "Parallel data", href: "/parallel-data/1" },
  
    { name: "Logout", href: "/login" },
  ];

  const pathname = usePathname();

  return (
   <div>
    <div className="flex flex-row gap-4 bg-slate-400 pl-4">
    {/*   active link */}
    {navBar.map((item, key) => {
       const isActive = pathname === item.href;
      const activeClass = isActive ? "font-bold p-4 bg-yellow-400" : "text-black p-4";
    
      return (
         <Link  className={activeClass} href={item.href} key={key}>{item.name}</Link>
       
      )

    })}
    </div>
  {/* <Link  href="/dashboard">settings</Link>
  <Link  href="/settings">settings</Link>
  <Link  href="/profile">settings</Link>
  <Link  href="/logout">settings</Link> */}
   
   </div>
  );
}
