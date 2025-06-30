import  { Metadata } from "next";

type MetaProps = {
  params: Promise<{ productId: string }>;
}

export const generateMetadata  = async ({
  params,
  }: MetaProps ): Promise<Metadata> => {
  const { productId } = await params;
  return {
    title: `Product ${productId}`,
    description: `Description for Product ${productId}`,
  };
 };

export default async function Products({
  params
} : 
  Readonly<{
    params: Promise<{ productId: string }>
  
  }>) {

  const { productId } = await params;
  // Simulate fetching product details from an API
  const productDetails: { id: string; name: string; description: string } = await new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: productId,
        name: `Product ${productId}`,
        description: `Description for Product ${productId}`,
      });
    }, 1000);
  });
  console.log(productDetails);
  if( (productId === "400")) {
   throw new Error("Product not found");
  }
    
  return (
   <div>

   <h1>{productDetails.name}</h1>
     <div>{productDetails.description}</div>
  
  
   </div>
  );
}
