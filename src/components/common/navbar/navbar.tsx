
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";


interface NavItem {
  id:string;
  name: string;
  href: string;
}

export default function Navbar(props: Readonly<{ navBar: NavItem[] }>) {
 

  const pathname: string = usePathname();

  return (
    <div>
      <div className="flex flex-row gap-4 bg-slate-400 pl-4">
        {/* active link */}
        {props.navBar.map((item: NavItem) => {
          const isActive: boolean = pathname === item.href;
          const activeClass: string = isActive
            ? "font-bold p-4 bg-pink-400"
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
