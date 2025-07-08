"use client";
import React, { useEffect, useState } from "react";
import Heading from "../../common/heading/heading";
import Cart from "../../common/cart/cart";
import type { Product } from "@/contexts/contextTypes";
import { ProductRow, ProductSection } from "./product.styles";
import { useAuth } from "@/contexts/useContext";

interface ProductProps {
  readonly headingName: string;

  products: Product[];
  addToCart: (product: Product) => void;
}

export default function Product(props: Readonly<ProductProps>) {
  const { headingName, products } = props;
  const [productData, setProductData] = useState(products);
  const { query, setQuery } = useAuth();

  useEffect(() => {
    setProductData(products);
  }, [products]);

  useEffect(() => {
    if (query) {
      const filtered = productData.filter((product) =>
        product.name.toLowerCase().includes(query?.toLowerCase())
      );
      setProductData(filtered);
    } else {
      setProductData(products);
    }
  }, [query, setQuery, setProductData, productData, products]);

  return (
    <ProductSection>
      <Heading headingName={headingName} />

      <ProductRow>
        {productData.length === 0 && <p>No products found in this Category.</p>}
        {productData.map((item: Product) => (
          <Cart key={item.id} productItem={item} addToCart={props.addToCart} />
        ))}
      </ProductRow>
    </ProductSection>
  );
}
