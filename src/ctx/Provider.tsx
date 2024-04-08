"use client";
import { SessionProvider } from "next-auth/react";
import { useEffect } from "react";

export function Providers({
  session,
  children,
}: {
  session: any;
  children: React.ReactNode;
}) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}
