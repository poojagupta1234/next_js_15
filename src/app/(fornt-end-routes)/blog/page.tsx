
import BlogCard from "@/components/blog/BlogCard";

const blogPosts = [
  {
    id: 1,
    title: "How to Build a Modern Website with Next.js",
    excerpt: "Learn how to create fast, SEO-friendly websites using the App Router and Tailwind CSS.",
    date: "July 8, 2025",
    image: "/images/blog1.jpg",
  },
  {
    id: 2,
    title: "Understanding Server vs Client Components",
    excerpt: "Discover the power of React Server Components in Next.js and when to use them.",
    date: "June 30, 2025",
    image: "/images/blog2.jpg",
  },
  {
    id: 3,
    title: "Top Tailwind UI Patterns in 2025",
    excerpt: "See what’s trending in UI design and how to build reusable patterns.",
    date: "June 15, 2025",
    image: "/images/blog3.jpg",
  },
];
export default async function BlogPage() {
    await new Promise((resolve) => setTimeout(resolve, 2000));
  
  return (
   <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-10 text-center">Our Latest Blog Posts</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
