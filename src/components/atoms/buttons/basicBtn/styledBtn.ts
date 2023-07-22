import { colors } from "@/styles/colors";
import { styled } from "styled-components";

export const StyledButton = styled.button<{ backgroundColor?: string }>`
  background-color: ${({ backgroundColor }) =>
    backgroundColor || colors.background};
  font-weight: 700;
  border: 0;
  border-radius: 1em;
  display: inline-block;
  line-height: 1;
  color: #ffffff;
`;
