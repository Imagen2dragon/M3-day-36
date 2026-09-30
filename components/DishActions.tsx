"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import type { Dish } from "@/lib/dishes";

export default function DishActions({ dish }: { dish: Dish }) {
  const { addToCart } = useCart();
  return (
    <div className="action-row">
      <button type="button" className="btn-primary" onClick={() => addToCart(dish)}>Add to Cart</button>
      <Link href="/menu" className="btn-secondary">Back to Menu</Link>
    </div>
  );
}
