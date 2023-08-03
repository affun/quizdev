"use client";
import { auth } from "@/auth/firebase";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  const [userState, setUserState] = useState(false);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserState(true)
        // router.push("/category");
      }
    });
  }, []);

  return (
    <div>
      home <br />
      <button
        onClick={() => {
          router.push("/register");
        }}
      >
        register
      </button>{" "}
      <br />
      <button
        onClick={() => {
          router.push("/login");
        }}
      >
        login
      </button>
      <br />
      <button
        className={userState ? "" : "invisible"}
        onClick={() => {
          router.push("/category");
        }}
      >
        Get Started
      </button>
    </div>
  );
};

export default page;
