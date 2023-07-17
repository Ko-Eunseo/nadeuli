import type { Metadata } from "next";
import StyledComponentsRegistry from "@/lib/registry";
import { gothic } from "./font";

export const metadata: Metadata = {
  title: "나들이",
  description: "태그만 몇개 선택하면 여행계획 끝! 태그 기반 k-여행 추천 서비스",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={gothic.className}>
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
