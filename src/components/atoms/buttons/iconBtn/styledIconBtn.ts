import { styled } from "styled-components";
import { colors } from "@/styles/colors";

const StyledIconBtn = styled.button`
  border: 0;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: ${colors.background};
  color: ${({ color }) => color || colors.yellow};
`;

export default StyledIconBtn;
