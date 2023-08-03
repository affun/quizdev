"use client";
import { auth } from "@/auth/firebase";
import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  const handleSignOut = () => {
    signOut(auth).then(() => {
      router.push("/");
    });
  };

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        router.push("/");
      }
    });
  }, []);

  return (
    <div>
      home
      <button onClick={handleSignOut}>sign out</button>
    </div>
  );
};

export default page;
