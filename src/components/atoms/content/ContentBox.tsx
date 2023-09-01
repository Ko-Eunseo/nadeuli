import { CardData } from "@/components/molecules/card/Card";
import { StyledContentBox } from "./styled";
import Char from "../texts/Character";

const ContentBox = ({ title, addr1 }: Partial<CardData>) => {
  return (
    <>
      <StyledContentBox>
        <Char size="md" weight="mid">
          {title}
        </Char>
        <Char size="sm" weight="base">
          {addr1}
        </Char>
      </StyledContentBox>
    </>
  );
};

export default ContentBox;
