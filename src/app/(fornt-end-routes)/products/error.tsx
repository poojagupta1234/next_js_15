"use client";

export default function Error({error, reset}: {error: Error; reset: () => void}) {

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-500 text-white" >
      <h1 className="text-2xl font-bold">Something went wrong!</h1>
      <p className="mt-4">{error.message}</p>
      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded cursor-pointer" onClick={reset}>Try Again</button>
    </div>
  )
  
}