"use client";

import { auth } from "@/auth/firebase";
import { signOut } from "firebase/auth/cordova";
import { useRouter } from "next/navigation";
import React from "react";

const page = () => {
  const router = useRouter();
  const handleSignOut = () => {
    signOut(auth).then(() => {
      router.push("/home");
    });
  };
  return (
    <div>
      category <br />
      <button onClick={handleSignOut}>sign out</button>
    </div>
  );
};

export default page;
