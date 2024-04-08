"use client";
import useAuth from "@/hook/useAuth";
import { signIn, signOut, useSession } from "next-auth/react";

export default function AuthButton() {
  const { data: session } = useSession();
  const handleSubmit = async () => {
    const username = "admin";
    const password = "password";

    await signIn("credentials", { username, password, callbackUrl: "/" });
  };
  console.log("auth-btn-component", { session });

  if (session)
    return (
      <>
        {session?.user?.name} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );

  return (
    <>
      Not signed in <br />
      <button onClick={handleSubmit}>Sign in</button>
    </>
  );
}
