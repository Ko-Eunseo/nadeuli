import { colors } from "@/styles/colors";
import { StyledButton } from "./styledBtn";

interface ButtonProps {
  bg: keyof typeof colors;
  label: string;
  onClick?: () => void;
}

const Button = ({ bg = "green", label, onClick, ...rest }: ButtonProps) => {
  return (
    <StyledButton $bg={colors[bg]} onClick={onClick} {...rest}>
      {label}
    </StyledButton>
  );
};

export default Button;
