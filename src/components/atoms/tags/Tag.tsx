import { colors } from "@/styles/colors";
import StyledTag from "./styledTag";
import Char from "../texts/Character";

interface TagProps {
  name: string;
  bg: keyof typeof colors;
  onClick?: () => void;
}

const Tag = ({ name, bg = "green", onClick }: TagProps) => {
  // props와 property를 구분하기 위해 $접두사 추가
  return (
    <StyledTag onClick={onClick} $bg={bg}>
      <Char size={"sm"} weight={"mid"}>
        {name}
      </Char>
    </StyledTag>
  );
};

export default Tag;
