
import React from 'react';
import Header from '@/app/components/ecom/header/header';
import Footer from '@/app/components/ecom/footer/footer';


interface DashboardProps {
  // Define the expected properties here, e.g., title?: string;
  readonly role: string; // The role of the user, e.g., 'admin', 'user', etc.
}

export default function Dashboard(props: DashboardProps) {
    const { role } = props;
  return (
   <div>
    <Header/>
    <div className=' bg-gray-100  p-6 h-screen flex flex-col items-center justify-center'>
    <h1 className='text-4xl font-bold mb-4'>Dashboard</h1>
    <p className='text-xl mb-6'>This is the dashboard page for the role: {role}</p>
    <div className='bg-white shadow-md rounded-lg p-8 max-w-md w-full'>
    <h2 className='text-2xl font-semibold mb-4'>Hello, {role}!</h2>
  </div>
  
    </div>
    <Footer />
   </div>
  );
}
