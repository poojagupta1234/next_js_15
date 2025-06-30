
'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter, redirect } from 'next/navigation';

export default function Header() {
  const router = useRouter();


  
    const signup = () => {
        console.log("signup");
        router.replace("/login");
        // Add your signup logic here
    }


    const login = () => {
        console.log("login");
         redirect("/dashboard");
        // Add your login logic here
    }
  return (
    <div>
   
   <div className='flex bg-slate-800  items-center justify-between px-2'>
     <Link  href="/"  className='text-white '> 
        <Image  
        src={`/images/GWL.jfif`}
      width={50}
      height={50}
      alt="Picture of the author"/>
    
     </Link>
     <nav className='flex p-4  items-center gap-4 flex-wrap'> 
    <Link href="/dashboard" className='bg-amber-300 p-4 '>Dashboard</Link>
    <Link href="/profile" className='bg-amber-300 p-4'>Profile</Link>
    <Link href="/about" className='bg-amber-300 p-4'>About</Link>
    <Link href="/contact" className='bg-amber-300 p-4'>Contact</Link>
    <Link href="/products/1" className='bg-amber-300 p-4'>Product dynamic 1 with error specific portasion</Link>
    <Link href="/products/2" className='bg-amber-300 p-4'>Product dynamic 2</Link>
    <Link href="/nav-bar" className='bg-amber-300 p-4'>templete rerender example</Link>
    <Link href="/blog" className='bg-amber-300 p-4'>show loading status</Link>
    <Link href="/complex-dashboard" className='bg-amber-300 p-4'>complex-dashboard - Parallel route example</Link>
    <Link href="/i1" className='bg-amber-300 p-4'>Intercept Route Example</Link>
    
    <Link href="/blink" className='bg-amber-300 p-4'> Blink site - ecommerce site</Link>


   </nav>
   <div className='flex gap-4 justify-center items-center p-4'>
    <button className='bg-amber-300 p-4 rounded-2xl cursor-pointer' onClick={() => signup()}>Register</button>
    <button className='bg-amber-300 p-4 rounded-2xl cursor-pointer' onClick={() => login()}>Login</button>
   </div>

   </div>
   </div>
  );
}
