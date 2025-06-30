
type AuthorProps = {
    readonly userId: string | number;
};


export default async function Author({ userId }: AuthorProps) {


  await new Promise((resolve) => setTimeout(resolve, 2000));
   const res = await fetch(`https://jsonplaceholder.typicode.com/users/1`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();

  return (
    <div>
            <div key={data.id} className="mb-2 bg-green-500 p-2 rounded-lg">
             Author :<strong>{data.name} - {userId}</strong>
            </div>
            <div className="mb-2 bg-blue-500 p-2 rounded-lg">
              Email: <strong>{data.email}</strong>
            </div>
    
      </div>
  );
}