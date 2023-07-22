import { colors } from "@/styles/colors";
import StyledTag from "./styledTag";

interface TagProps {
  name: string;
  bg: keyof typeof colors;
  onClick?: () => void;
}

const Tag = ({ name, bg = "green", onClick }: TagProps) => {
  return (
    <StyledTag onClick={onClick} backgroundColor={colors[bg]}>
      {name}
    </StyledTag>
  );
};

export default Tag;
