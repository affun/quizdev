"use client";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { auth } from '@/auth/firebase';

const page = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e: React.SyntheticEvent) =>{
    e.preventDefault();
    console.log(email,password);
    if (email !== "" && password !== "") {
      createUserWithEmailAndPassword(auth, email, password).then(()=>{
        router.push("/home");
      })
    }
  }

  return (
    <div>
      <a
        onClick={() => {
          router.push("/");
        }}
      >
        home
      </a>

      <form onSubmit={handleRegister}>
        email <br />
        <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} /> <br />
        password <br />
        <input type="text" value={password} onChange={(e)=>{setPassword(e.target.value)}} /> <br />
        <button type="submit">register</button>
      </form>
      <a
        onClick={() => {
          router.push("/login");
        }}
      >
        login
      </a>
    </div>
  );
};

export default page;
