"use client";

import "../../globals.css";
import React, { useState } from "react";



export default function ComplexLayout({
  children,
  notifications,
  users,
  revenue

}: Readonly<{
  children: React.ReactNode;
  notifications:  React.ReactNode;
   users: React.ReactNode;
  revenue: React.ReactNode;
}>) {
  const [isLogged, setisLogged] = useState(false);
  //conditional rendering example
  return (
    <div>
      { isLogged ? ( 
         <>
        <h1 className="text-2xl font-bold mb-4">Welcome to the Complex Dashboard</h1>
        <main>{children}</main>
        <div>{notifications}</div>
        <div>{users}</div>
         <div>{revenue}</div> 
        </>
       ) : (
       <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
     
        <button className="bg-blue-500 text-white p-4 rounded cursor-pointer" onClick={() => setisLogged(true)}>
          Login
        </button>
        </div>)}
       
     
      
    
      </div>
  );
}
