import { colors } from "@/styles/colors";
import { styled } from "styled-components";

export const StyledButton = styled.button<{ $bg?: string }>`
  background-color: ${({ $bg }) => $bg || colors.background};
  font-weight: 700;
  padding: 1rem;
  border: 0;
  border-radius: 1em;
  display: inline-block;
  line-height: 1;
  color: #ffffff;
  cursor: pointer;
  &:hover {
    transition: 0.5s;
    box-shadow: 5px 5px 0 ${colors.gray};
  }
`;
