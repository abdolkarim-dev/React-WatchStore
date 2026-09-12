import {
  createContext,
  useContext,
  useState,
  type ReactNode,
  type Dispatch,
  type SetStateAction,
} from "react";

import type { Product } from "../data/products";

type CartContextType = {
  valueCart: Product[];
  setValueCart: React.Dispatch<React.SetStateAction<Product[]>>;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [valueCart, setValueCart] = useState<Product[]>([]);

  return (
    <CartContext.Provider value={{ valueCart, setValueCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
}
