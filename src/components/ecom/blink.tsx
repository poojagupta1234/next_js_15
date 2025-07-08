"use client";
import React from "react";

import Header from "./header/header";
import Footer from "./footer/footer";
import { useAuth } from "@/contexts/useContext";
import type {
  Product,
  CartItem,
  ProductCategory,
} from "@/contexts/contextTypes";
import dynamic from "next/dynamic";

const ProductComponent = dynamic(() => import("./product/product"));

// This component renders the Blink page with a header, product sections, and a footer.
// It uses the ProductComponent to display products in each section.
// It also provides functionality to add products to the cart using the useAuth context.

export default function Blink(
  props: Readonly<{ products: ProductCategory[] }>
) {
  const { products } = props;
  const { setCartItems } = useAuth();

  // Function to toggle the drawer open/close state

  const addToCart = (product: Product): void => {
    setCartItems((prev: CartItem[]) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };



 

  return (
    <>
      <Header />
      {products?.map((item: ProductCategory) => {
        if (item) {
          // Render the section with products
          return (
            <div key={item.id}>
              <ProductComponent
                key={item.id}
                headingName={item.heading ?? "Default Heading"}
                products={item.products ?? []}
                addToCart={addToCart}
                
              />
            </div>
          );
        }
        return null;
      })}

      <Footer />
    </>
  );
}
