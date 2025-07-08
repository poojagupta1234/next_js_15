"use client";
import Image from "next/image";
import type { Product } from "@/contexts/contextTypes";

import {
  ProductItems,
  ProductItemsImg,
  ProductTime,
  ProductItemsText,
  ProductAdd,
  StyledButton,
} from "./cart.styles";


interface CartProps {
  readonly productItem: Product;
  readonly addToCart: (product: Product) => void;
}

export default function Cart(props: CartProps) {
  const { productItem, addToCart } = props;

  return (
    <ProductItems key={productItem.id}>
      <ProductItemsImg>
        
        <Image
          src={`/images/amul.avif`}
          alt="amul.avif"
          width={70}
          height={100}
          quality={75}
          className="img"
          priority
        />
      </ProductItemsImg>
    
        <ProductTime>
          <Image
            src={`/images/15-mins.avif`}
            alt="15 mins"
            width={25}
            height={25}
            quality={75}
          />
          8 min
        </ProductTime>
      
      <ProductItemsText>
        <h3>{productItem.name}</h3>
        <p>{productItem.qty} ml</p>
        <ProductAdd>
          <b>₹{productItem.price}</b>
          <StyledButton onClick={() => addToCart(productItem)}>Add Me</StyledButton>
        </ProductAdd>
      </ProductItemsText>
    </ProductItems>
  );
}
