"use client";
import Heading from "../../common/heading/heading";
import Cart from "../../common/cart/cart";
import type { Product } from "@/app/contexts/contextTypes";
import { ProductRow, ProductSection } from "./product.styles";

interface ProductProps {
  readonly headingName: string;
  readonly buttonName: string;
  products: Product[];
  addToCart: (product: Product) => void;
}

export default function Product(props: Readonly<ProductProps>) {
  const { headingName, buttonName, products } = props;

  return (
    <ProductSection>
      <Heading headingName={headingName} buttonName={buttonName} />

      <ProductRow>
        {products.map((item: Product) => (
          <Cart key={item.id} productItem={item} addToCart={props.addToCart} />
        ))}
      </ProductRow>
    </ProductSection>
  );
}
