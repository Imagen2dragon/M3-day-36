"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";

export default function Header() {
  const pathname = usePathname();
  const { totalCount } = useCart();
  const { user, logout } = useAuth();
  const active = (path: string) => pathname === path || pathname.startsWith(`${path}/`);

  return (
    <header className="site-header">
      <div className="brand"><h1>Addis Eats</h1></div>
      <nav className="site-nav" aria-label="Main navigation">
        <Link href="/" className={`nav-link ${pathname === "/" ? "on" : ""}`}>Home</Link>
        <Link href="/menu" className={`nav-link ${active("/menu") ? "on" : ""}`}>Menu</Link>
        <Link href="/cart" className={`nav-link ${active("/cart") ? "on" : ""}`}>Cart ({totalCount})</Link>
        <Link href="/checkout" className={`nav-link ${active("/checkout") ? "on" : ""}`}>Checkout</Link>
        {user ? <button type="button" className="btn-auth" onClick={logout}>Sign Out</button> : <Link href="/login" className={`nav-link ${active("/login") ? "on" : ""}`}>Sign In</Link>}
      </nav>
    </header>
  );
}
