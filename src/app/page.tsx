"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <main>
      <a
        onClick={() => {
          router.push("/login");
        }}
      >
        login
      </a>
      <a
        onClick={() => {
          router.push("/register");
        }}
      >
        register
      </a>
    </main>
  );
}
