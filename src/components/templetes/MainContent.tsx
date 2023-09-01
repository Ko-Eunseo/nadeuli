import Title from "../molecules/title/Title";
import { BGImage, Display } from "./styles";
import CustomSelectBox from "./select/CustomSelectBox";
import CustomSection from "./CustomSection";
import Logo from "../atoms/logo/Logo";
import { useState } from "react";

const MainContent = () => {
  const [isSelect, setisSelect] = useState(false);
  return (
    <section>
      <BGImage>
        <Logo />
        <Display>
          <Title type="sub" text="태그만 추가하면 여행 계획 끝!" />
          <Title type="main" text="K-여행 계획 가이드" />
        </Display>
        <CustomSelectBox setisSelect={setisSelect} />
      </BGImage>
      <CustomSection isSelect={isSelect} />
    </section>
  );
};

export default MainContent;
