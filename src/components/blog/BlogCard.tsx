import Image from "next/image";



interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
}
export default function BlogCard({ post }: Readonly<{ post: BlogPost }>) {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden hover:scale-105">
      <Image
        src={post.image}
        alt={post.title}
        width={400}
        height={250}
        className="w-full h-48 min-h-[450px] object-cover"
      />
      <div className="p-6 space-y-3">
        <p className="text-sm text-gray-400">{post.date}</p>
        <h2 className="text-xl font-semibold text-gray-800">{post.title}</h2>
        <p className="text-gray-600 text-sm">{post.excerpt}</p>
      
      </div>
    </div>
  );
}
