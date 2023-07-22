import { IconType } from "react-icons";
import StyledIconBtn from "./styledIconBtn";

interface IconBtnProps {
  Icon: IconType;
  onClick?: () => void;
}
const IconBtn = ({ Icon, onClick }: IconBtnProps) => {
  return (
    <StyledIconBtn onClick={onClick}>
      <Icon />
    </StyledIconBtn>
  );
};

export default IconBtn;
