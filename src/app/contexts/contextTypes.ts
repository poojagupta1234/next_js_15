export type User = {
  password: string;
  email: string;
  role: string;
};

export type AuthContextType = {
  user: User | null;
  token: string | null;
  login: (user: User, token: string) => void;
  logout: () => void;
  cartItems: CartItem[];
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
  totalPrice: number;
  totalQuantity: number; // Added totalQuantity
  isDrawerOpen: boolean;
  removeCartItem: (id: number) => void;
  toggleDrawer: () => void; // Added toggleDrawer to the context type

};

export interface Product {
  id: number;
  name: string;
  price: number;
  qty: number;
  imageUrl?: string;
  description?: string;
   quantity?: number;
}

export interface ProductCategory {
  id: number;
  heading: string;
  products: Product[];
}


export interface CartItem extends Product {
  quantity: number;
}
