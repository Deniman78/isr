"use client";

import { createContext, ReactNode } from "react";
interface IAuthProvider {
  session: any;
}

export const AuthContext = createContext<IAuthProvider>({
  session: null,
});

export default function AuthProvider({
  session,
  children,
}: {
  session: any;
  children: ReactNode;
}) {
  return (
    <AuthContext.Provider value={{ session }}>{children}</AuthContext.Provider>
  );
}
