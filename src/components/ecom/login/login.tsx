'use client';
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { handleLogin } from '@/app/actions';
import { useAuth } from '@/contexts/useContext';

export default function LoginForm() {

  const router = useRouter();
   const { login, user } = useAuth();
  const [error, setError] = React.useState<string | null>(null);

  useEffect(() => {
    
    setTimeout(() => {
      setError(null);
    }, 5000);
   
  }, [error]);

  useEffect(() => {
    if (user) {
   
      // Redirect to the dashboard if token exists
      router.replace(`/blink`);
    }
  }, [user, router]);
  const onSubmit = async (e: React.FormEvent) => {
   
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);
     console.log("formData", formData);
   

    const result = await handleLogin(formData);

         if(result.error){
       setError(result.error);
         }

    if(result.token) {
      
      login(result, result.token);

        router.replace(`/blink`);
     

    }
     
  };

  return (
   <div className="w-screen h-[100vh] bg-[linear-gradient(rgba(139,179,194,0.5),rgba(92,182,207,0.5))]">
      <div className="w-[400px] mx-auto bg-[var(--light-white)] relative top-[30%] translate-y-[var(--translateY)] px-[40px] py-[20px] rounded-[8px]">
     <h1  className="text-[2.5rem] text-gray-600 mb-[10px] bg-center">Login Form</h1>
    {error && <p className="text-red-500">{error}</p>}
    <form onSubmit={onSubmit}>
        <label htmlFor="email">Email: </label>
      <input name="email" className="p-[6px] my-[10px] w-full border border-black rounded-[4px] text-lg"/>
       <label htmlFor="password">Password: </label>
      <input name="password" className="p-[6px] my-[10px] w-full border border-black rounded-[4px] text-lg"/>
 
 <div className='flex items-center justify-between my-[10px] gap-2'>
      <button type="submit" className="p-[6px] my-[10px] w-full rounded-[4px] text-2xl bg-green-500 cursor-pointer text-white bold">Login</button>
      <button type="button" onClick={() => router.push('/blink')} className="p-[6px] my-[10px] w-full rounded-[4px] text-2xl bg-green-500 cursor-pointer text-white bold">Back</button>
    </div>
 
 
    </form>
    <p className="text-gray-500 text-center mt-[10px]">
      admin email - <span className="text-blue-500">admin@example.com</span>  password - <span className="text-blue-500">admin123</span>
    </p>
      <p className="text-gray-500 text-center mt-[10px]">
      admin email - <span className="text-blue-500">user@example.com</span>  password - <span className="text-blue-500">user123</span>
    </p>
    </div>
    </div>
  );
}