"use client";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  return (
    <div>
      <a
        onClick={() => {
          router.push("/");
        }}
      >
        home
      </a>
    </div>
  );
};

export default page;
