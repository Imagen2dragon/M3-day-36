"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart, total } = useCart();
  if (cart.length === 0) return <div className="page-card"><h2>Your Cart</h2><p className="empty-msg">Your cart is currently empty.</p><Link href="/menu" className="btn-primary">Browse Menu</Link></div>;

  return (
    <div className="page-card">
      <h2>Your Cart</h2>
      <ul className="cart-list">
        {cart.map((item) => <li key={item.id} className="cart-item"><div><strong>{item.name}</strong> &bull; {item.qty} &times; {item.price} ETB</div><button type="button" className="btn-rm" onClick={() => removeFromCart(item.id)} aria-label={`Remove ${item.name}`}>&times;</button></li>)}
      </ul>
      <div className="cart-total">Total: {total} ETB</div>
      <Link href="/checkout" className="btn-primary checkout-link">Proceed to Checkout &rarr;</Link>
    </div>
  );
}
