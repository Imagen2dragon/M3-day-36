"use client";

import { useRouter } from "next/navigation";
import RequireAuth from "@/components/RequireAuth";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";

function CheckoutContent() {
  const { cart, total, clearCart } = useCart();
  const { user } = useAuth();
  const router = useRouter();

  function handlePay() {
    window.alert(`🎉 Order placed for ${total} ETB via TeleBirr!`);
    clearCart();
    router.replace("/");
  }

  return <div className="page-card"><h2>TeleBirr Checkout</h2><p>Signed in as: <strong>{user?.name}</strong> ({user?.phone})</p><p className="checkout-summary">Total to pay: <strong>{total} ETB</strong> ({cart.length} item types)</p><button type="button" className="btn-primary" onClick={handlePay} disabled={total === 0}>Confirm &amp; Pay with TeleBirr</button></div>;
}

export default function CheckoutPage() {
  return <RequireAuth><CheckoutContent /></RequireAuth>;
}
