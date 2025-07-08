'use client';
import React, { useState,  useEffect } from "react";
export default function ClientData() {
    const [clientData, setClientData] = useState<{ id: number; title: string; body: string }[] | null>(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
   
   
    useEffect(() => {
        const fetchData = async () => {
            try {
            const res = await fetch("https://jsonplaceholder.typicode.com/posts");
            if (!res.ok) {
                throw new Error("Failed to fetch data");
            }
            const data = await res.json();
            console.log(data);
            setClientData(data);
          
          } catch (err) {
             console.error("Error fetching data:", err);
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
          } finally {
        setLoading(false);
          }
 }
   fetchData();
      
    }, []);

    if(loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error: {error}</div>;
    }
    if (!clientData) {
        return <div>No data available</div>;
    }

  return (
    <div>
      <h1 className="text-3xl font-bold underline p-4 bg-amber-400">Client Data</h1>
      <p className="text-lg p-4 bg-pink-400">This is the client data page.</p>
        <div className="mt-4">
            <h2 className="text-2xl font-semibold p-4 bg-red-300 mb-4">Fetched Data:</h2>
            <ul className="list-disc pl-5">
            {clientData.map((item:{id: number; title: string; body: string}) => (
                <li key={item.id} className="mb-2 p-4 bg-green-500 rounded-lg">
                <strong>{item.title}</strong>: {item.body}
                </li>
            ))}
            </ul>
        </div>
    </div>
  );
}
// This page is for client data and will be used to display client-specific information.
// It is a placeholder for now and can be expanded later.
// You can add more components or functionality as needed.