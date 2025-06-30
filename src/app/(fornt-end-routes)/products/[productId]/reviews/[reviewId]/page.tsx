
export default  async function Reviews(
    {
    params 
}: 
    Readonly<{
         params: Promise<{ productId: string, reviewId: string }> }>
        ) {  
  const  { productId, reviewId } =  await params; 
  return (
     
    <div>
    reviewId {reviewId} for product {productId}
    <h1>Review {reviewId}</h1>
   
    </div>
  );
}
// Compare this snippet from src/app/products-dynmic/page.tsx: