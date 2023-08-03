"use client";
import { auth } from "@/auth/firebase";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      router.push(user ? "/home" : "/login");
    })  
  },[])
  return (
    <main>
    </main>
  );
}
