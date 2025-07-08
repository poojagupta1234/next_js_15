// app/context/AuthContext.tsx
"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import type { AuthContextType, User, CartItem } from "./contextTypes";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [totalQuantity, setTotalQuantity] = useState<number>(0);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [query, setQuery] = useState("");
const login = useCallback((user: User, token: string) => {
  setUser(user);
  setToken(token);
  setIsDrawerOpen(false);
}, [setUser, setToken, setIsDrawerOpen]);

  const logout = useCallback(() => {
    setUser(null);
    setToken(null);
    setIsDrawerOpen(false);
  }, [setUser, setToken, setIsDrawerOpen]);
  // Function to remove an item from the cart
  const removeCartItem = useCallback((id: number): void => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  }, [setCartItems]);

  useEffect(() => {
    const totalQuantity = cartItems.reduce((total, item) => {
      return total + item.quantity;
    }, 0);
    setTotalQuantity(totalQuantity);

    const totalPrice = cartItems.reduce((total, item) => {
      return total + item.quantity * item.price;
    }, 0);
    setTotalPrice(totalPrice);
  }, [cartItems]);

  const toggleDrawer = useCallback(() => {
    setIsDrawerOpen(!isDrawerOpen);
  }, [setIsDrawerOpen, isDrawerOpen]);

  const contextValue = React.useMemo(
    () => ({
      user,
      token,
      login,
      logout,
      setCartItems,
      cartItems,
      totalQuantity,
      totalPrice,
      toggleDrawer,
      isDrawerOpen,
      removeCartItem,
      setQuery,
      query
    }),
    [
      user,
      token,
      login,
      logout,
      setCartItems,
      cartItems,
      totalQuantity,
      totalPrice,
      toggleDrawer,
      isDrawerOpen,
      removeCartItem,
      setQuery,
      query
    ]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
