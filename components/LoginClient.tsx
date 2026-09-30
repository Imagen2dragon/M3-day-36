"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function LoginClient({ from }: { from: string }) {
  const [phone, setPhone] = useState("0912345678");
  const { login } = useAuth();
  const router = useRouter();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    login(phone);
    router.replace(from || "/menu");
  }

  return <div className="page-card login-card"><h2>Sign In with TeleBirr</h2><p className="muted">You must sign in to view the checkout page.</p><form onSubmit={handleSubmit} className="login-form"><input type="tel" value={phone} onChange={(event) => setPhone(event.target.value)} placeholder="09xxxxxxxx" required /><button type="submit" className="btn-primary">Sign In</button></form></div>;
}
