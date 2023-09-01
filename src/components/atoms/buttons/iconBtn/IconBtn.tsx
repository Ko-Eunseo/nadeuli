import { IconType } from "react-icons";
import StyledIconBtn from "./styledIconBtn";

interface IconBtnProps {
  Icon: IconType;
  onClick?: () => void;
  disabled?: boolean;
}
const IconBtn = ({ Icon, onClick, disabled }: IconBtnProps) => {
  return (
    <StyledIconBtn onClick={onClick} disabled={disabled}>
      <Icon />
    </StyledIconBtn>
  );
};

export default IconBtn;
