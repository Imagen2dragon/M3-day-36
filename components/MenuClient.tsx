"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { CATEGORIES, DISHES } from "@/lib/dishes";

export default function MenuClient({ currentCategory }: { currentCategory: string }) {
  const router = useRouter();
  const { addToCart } = useCart();
  const filtered = currentCategory === "All" ? DISHES : DISHES.filter((dish) => dish.category === currentCategory);

  function setCategory(category: string) {
    router.push(category === "All" ? "/menu" : `/menu?category=${encodeURIComponent(category)}`);
  }

  return (
    <>
      <div className="filter-chips">
        {CATEGORIES.map((category) => (
          <button key={category} type="button" className={`chip ${currentCategory === category ? "on" : ""}`} onClick={() => setCategory(category)}>{category}</button>
        ))}
      </div>
      {filtered.length === 0 ? <p className="empty-msg">No dishes in this category.</p> : (
        <div className="dish-grid">
          {filtered.map((dish) => (
            <div key={dish.id} className="dish-card">
              <h3>{dish.name} {dish.spicy && "🌶️"}</h3>
              <p className="price">{dish.price} ETB</p>
              <div className="card-actions">
                <Link href={`/menu/${dish.id}`} className="btn-detail">Details</Link>
                <button type="button" className="btn-add" onClick={() => addToCart(dish)}>+ Add</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
