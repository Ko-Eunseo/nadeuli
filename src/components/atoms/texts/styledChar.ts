import { styled } from "styled-components";
import { sizes, weights } from "@/styles/CharStyle";

interface StyledCharProps {
  fontSize?: string;
  fontWeight?: number;
}

export const StyledChar = styled.p<StyledCharProps>`
  font-size: ${({ fontSize }) => fontSize || sizes.md};
  font-weight: ${({ fontWeight }) => fontWeight || weights.base};
`;
