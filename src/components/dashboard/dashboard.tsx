
"use client";

import Navbar from "@/components/common/navbar/navbar";
export default function Dashboard() {

  const dashbordNavBar = [
     { id:"1", name: "Client data", href: "/client-data" },
    { id:"2", name: "Server data", href: "/server-data" },
    { id:"3", name: "Sequential data", href: "/sequential-data" },
    { id:"4", name: "Parallel data", href: "/parallel-data/1" },
   
  ];

  

  return (
   <div>
    <Navbar  navBar={dashbordNavBar} />
  
   </div>
  );
}
