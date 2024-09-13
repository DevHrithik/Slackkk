"use client";
import { Button } from "@/components/ui/button";
import { useAuthActions } from "@convex-dev/auth/react";
export default function Home() {
  const { signOut } = useAuthActions();
  return (
    <div>
      <Button onClick={() => void signOut()}>LogOut</Button>
      <h1>You are signed in</h1>
    </div>
  );
}
