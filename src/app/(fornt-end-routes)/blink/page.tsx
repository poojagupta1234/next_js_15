
import React from 'react';
import Blink from '@/components/ecom/blink';
import { products } from '@/app/data/data';

/**
 * BlinkPage component renders the Blink component with products data.
 */
export default function BlinkPage() {
  return (
    <div>
      {/* Render the Blink component and pass the products prop */}
      <Blink products={products} />
    </div>
  );
}
