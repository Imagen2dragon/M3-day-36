"use client";

import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import type { Dish } from "@/lib/dishes";

type CartItem = Dish & { qty: number };
type CartContextValue = {
  cart: CartItem[];
  addToCart: (dish: Dish) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  total: number;
  totalCount: number;
};

const CartContext = createContext<CartContextValue | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  function addToCart(dish: Dish) {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === dish.id);
      if (existing) {
        return prev.map((item) => item.id === dish.id ? { ...item, qty: item.qty + 1 } : item);
      }
      return [...prev, { ...dish, qty: 1 }];
    });
  }

  function removeFromCart(id: number) {
    setCart((prev) => prev.filter((item) => item.id !== id));
  }

  function clearCart() {
    setCart([]);
  }

  const value = useMemo(() => ({
    cart,
    addToCart,
    removeFromCart,
    clearCart,
    total: cart.reduce((sum, item) => sum + item.price * item.qty, 0),
    totalCount: cart.reduce((sum, item) => sum + item.qty, 0),
  }), [cart]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used inside CartProvider");
  return context;
}
