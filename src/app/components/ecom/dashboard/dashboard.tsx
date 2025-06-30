
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
    <div className=' bg-gray-100  p-6'>
  
    <p className='text-2xl'>Welcome to the dashboard!</p>
    <p className='text-2xl '>Role: {role}</p>
    </div>
    <Footer />
   </div>
  );
}
