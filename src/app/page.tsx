import { useRouter } from "next/router";

export default function Home() {
  return (
    <main>
      <a
        onClick={() => {
          useRouter().push("/login");
        }}
      >
        home
      </a>
    </main>
  );
}
