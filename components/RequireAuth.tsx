"use client";

import { useEffect, type ReactNode } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function RequireAuth({ children }: { children: ReactNode }) {
  const { user } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!user) router.replace(`/login?from=${encodeURIComponent(pathname)}`);
  }, [user, router, pathname]);

  if (!user) return <div className="page-card"><p>Checking sign-in…</p></div>;
  return children;
}
