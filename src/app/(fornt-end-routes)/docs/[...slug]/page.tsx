


import { notFound } from "next/navigation";
export default async function Docs({params} : Readonly<{
  params: Promise<{ slug: string[] }>
}>) {
  const { slug } = await params;
 
  const   slugLength = slug.length;
  if (slugLength === 4) {
    return (notFound());
  }
  return (
   <div>
    <h1>Docs</h1>
    {slugLength === 1 ? <h1>Docs</h1> : <h1>{slug[1]}</h1>}
    {slugLength === 2 ? <h1>Docs</h1> : <h1>catch all segment{slug[2]}</h1>}
    {slugLength === 3 ? <h1>Docs</h1> : <h1>{slug[3]}</h1>}
    
    Docs page
   </div>
  );
}
