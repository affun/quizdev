"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '@/auth/firebase';

const page = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log(email, password);
    if (email !== "" && password !== "") {
      signInWithEmailAndPassword(auth, email, password).then(() => {
        router.push("/home");
      });
    }
  };
  return (
    <div>
      <a
        onClick={() => {
          router.push("/");
        }}
      >
        home
      </a>
      <form onSubmit={handleLogin}>
        email <br />
        <input
          type="text"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />{" "}
        <br />
        password <br />
        <input
          type="text"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />{" "}
        <br />
        <button type="submit">Login</button>
      </form>
      <a
        onClick={() => {
          router.push("/register");
        }}
      >
        register
      </a>
    </div>
  );
};

export default page;
