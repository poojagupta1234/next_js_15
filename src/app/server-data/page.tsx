export default async function severDataFetching() {

      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
            if (!res.ok) {
                throw new Error("Failed to fetch data");
            }
            const data = await res.json();
            console.log(data);
    return (
   


    <div>
      <h1 className="text-3xl font-bold underline bg-amber-400 p-4"> Server Data Fetching</h1>
      <p className="text-lg p-4 bg-pink-400" >This is the server data page.</p>
        <div className="mt-4">
            <h2 className="text-2xl font-semibold p-4">Fetched Data:</h2>
            <ul className="list-disc pl-5">
            {data.map((item: {id: number, title: string, body: string}) => (
                <li key={item.id} className="mb-2 bg-green-500 p-2 rounded-lg">
                <strong>{item.title}</strong>: {item.body}
                </li>
            ))}
            </ul>
        </div>
    </div>
  );
     
    
}