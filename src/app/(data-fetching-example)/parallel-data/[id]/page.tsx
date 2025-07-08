

const fetchAlbums = async (userId: number) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const res = await fetch(`https://jsonplaceholder.typicode.com/users?userId=${userId}`);
    if (!res.ok) {
        throw new Error("Failed to fetch author data");
    }
    return res.json();
}

const fetchPosts = async (userId: number) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`);
    if (!res.ok) {
        throw new Error("Failed to fetch posts data");
    }
    return res.json();
}

export default async function ParallelDataFetching({ params }: { params: Promise<{ id: string }> }) {
 const { id } =  await params;

    await new Promise((resolve) => setTimeout(resolve, 2000));

     const [author, posts] = await Promise.all([
        fetchAlbums(Number(id)),
        fetchPosts(Number(id))
    ]);

   
    return (
   


    <div>
      <h1 className="text-3xl font-bold underline bg-amber-400 p-4"> Parallel Data Fetching</h1>
      <p className="text-lg p-4 bg-pink-400" >This is the Parallel data page.</p>
        <div className="mt-4">
            <h2 className="text-2xl font-semibold p-4">Fetched Data: Author</h2>
            <ul className="list-disc pl-5">
            {author.map((item: {id: number, username: string, email: string, website: string}) => (
                <li key={item.id} className="mb-2 bg-green-500 p-2 rounded-lg">
                <strong>username</strong>: {item.username}
                <br></br>
                 <strong>email</strong>: {item.email}
                    <br></br>
                  <strong>website</strong>: {item.website}
              
                </li>
            ))}
            </ul>
        </div>



        <div className="mt-4">
            <h2 className="text-2xl font-semibold p-4">Fetched Data: Posts</h2>
            <ul className="list-disc pl-5">
            {posts.map((item: {id: number, title: string, body: string, userId: number}) => (
                <li key={item.id} className="mb-2 bg-green-500 p-2 rounded-lg">
                <strong>{item.title}</strong>:
              
                </li>
            ))}
            </ul>
        </div>
    </div>
  );
     
    
}