import React from 'react';
import Checkout from '@/components/ecom/checkout/checkout';
import Header from '@/components/ecom/header/header';
import Footer from '@/components/ecom/footer/footer';
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
