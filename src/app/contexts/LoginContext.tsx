"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Dashboard() {
  const navBar = [
    { id: "1", name: "Dashboard", href: "/dashboard" },
    { id: "2", name: "Settings", href: "/settings" },
    { id: "3", name: "Profile", href: "/profile" },
    { id: "4", name: "Logout", href: "/login" },
  ];

  const pathname = usePathname();

  return (
    <div>
      <div className="flex flex-row gap-4 bg-slate-400 pl-4">
        {/*   active link */}
        {navBar.map((item) => {
          const isActive = pathname === item.href;
          const activeClass = isActive
            ? "font-bold p-4 bg-yellow-400"
            : "text-black p-4";

          return (
            <Link className={activeClass} href={item.href} key={item.id}>
              {item.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
