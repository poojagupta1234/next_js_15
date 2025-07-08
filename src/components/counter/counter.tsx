

"use client";
import React, { useState } from 'react';
export default function CounterPage() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };
  return (
    <>
    <h1 className='text-3xl text-amber-800'>Count: {count}</h1>
    <p>Click the buttons to change the count.</p>
   <div className='flex gap-2 mt-4'>
    <button  className="bg-green-500 border-2 rounded border-black p-6" onClick={increment}>Increment</button>
    <button  className="bg-red-500 border-2 rounded border-black p-6" onClick={decrement}>Decrement</button>
    <button  className="bg-blue-500 border-2 rounded border-black p-6" onClick={reset}>Reset</button>
    
   </div>
   </>
  );
}
