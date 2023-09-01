"use client";

import Image from "next/image";
import Main from "@/components/Main";
import GlobalStyle from "@/styles/globalStyle";

export default function Home() {
  return (
    <main>
      <GlobalStyle />
      <div>
        <Main />
      </div>
    </main>
  );
}
