'use client';
import { createContext, useContext, useState } from "react";

interface AuthContextType {
  name: string;
  email: string;
  password: string;
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
}
const AuthLoginContextProvider = createContext<AuthContextType | undefined>(undefined);
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [name, setName] = useState("admin");
  const [email, setEmail] = useState("admin");
  const [password, setPassword] = useState("admin");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
   
    setName("admin");
    setPassword("admin");
    setEmail("c6RdM@example.com");
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <AuthLoginContextProvider.Provider
      value={{ name, email, password, isLoggedIn, login, logout }}
    >
      {children}
    </AuthLoginContextProvider.Provider>
  );
}

export const useLoginAuth = () => {
  const context = useContext(AuthLoginContextProvider);
  if (context === undefined) {
    throw new Error("useLoginAuth must be used within an AuthProvider");
  }
  return context;
};