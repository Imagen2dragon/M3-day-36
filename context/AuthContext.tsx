"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

type User = { phone: string; name: string };
type AuthContextValue = {
  user: User | null;
  login: (phone: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  function login(phone: string) {
    setUser({ phone, name: "Abebe Bikila" });
  }

  function logout() {
    setUser(null);
  }

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used inside AuthProvider");
  return context;
}
