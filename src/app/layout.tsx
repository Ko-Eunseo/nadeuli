import type { Metadata } from "next";
import StyledComponentsRegistry from "@/lib/registry";
import { gothic } from "./font";
import Recoil from "@/components/Recoil";
import ReactQuery from "@/components/ReactQuery";

export const metadata: Metadata = {
  title: "나들이",
  description: "태그만 몇개 선택하면 여행계획 끝! 태그 기반 k-여행 추천 서비스",
};

//app 폴더 바로 아래에 있을 경우 _app, _document 역할을 대신한다.
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={gothic.className}>
      <body>
        <Recoil>
          <ReactQuery>
            <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
          </ReactQuery>
        </Recoil>
      </body>
    </html>
  );
}
