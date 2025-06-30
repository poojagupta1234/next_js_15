import React from 'react';
import Checkout from '@/app/components/ecom/checkout/checkout';
import Header from '@/app/components/ecom/header/header';
import Footer from '@/app/components/ecom/footer/footer';
export default function CheckoutPage() {
  return (
    <div>
     <Header />
      <Checkout />
       <Footer />
      {/* Add your checkout form and logic here */}
    </div>
  );
}
