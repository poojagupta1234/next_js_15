import Image from "next/image";
export default function ProductGrid() {
  const products = [
    {
      name: "Wireless Headphones",
      price: "$59.99",
      image: "/images/headphones.jpg",
    },
    {
      name: "Smartwatch",
      price: "$89.99",
      image: "/images/watch.jpeg",
    },
    {
      name: "Sneakers",
      price: "$49.99",
      image: "/images/sneakers.jpg",
    },
     {
      name: "Wireless Headphones",
      price: "$59.99",
      image: "/images/headphones.jpg",
    },
    {
      name: "Smartwatch",
      price: "$89.99",
      image: "/images/watch.jpeg",
    },
    {
      name: "Sneakers",
      price: "$49.99",
      image: "/images/sneakers.jpg",
    },
  ];

  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-center">Featured Products</h2>
      <div className="grid gap-8 md:grid-cols-3">
        {products.map((product, index) => (
          <div key={index} className="border rounded-lg overflow-hidden hover:shadow-md transition">
            <Image src={product.image} alt={product.name} className="w-full h-60 object-cover" />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              <p className="text-blue-600 font-bold">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
