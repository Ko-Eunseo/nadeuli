import { styled } from "styled-components";
import { colors } from "@/styles/colors";

const StyledIconBtn = styled.button`
  border: 0;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: ${colors.background};
  color: ${({ color }) => color || colors.yellow};
  transition: 0.5s;

  &:disabled {
    opacity: 0.1;
    cursor: not-allowed;
  }

  &:hover {
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }
`;

export default StyledIconBtn;
