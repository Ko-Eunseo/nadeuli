import { colors } from "@/styles/colors";
import { styled } from "styled-components";

export const Label = styled.label`
  display: none;
`;
export const StyledSelect = styled.div<{ overflow?: string }>`
  margin: 0.5rem;
  margin-left: 0;
  overflow: ${({ overflow }) => overflow};
  height: 36px;
  border-radius: 2rem;
  transition: 0.5s;
`;

export const SelectList = styled.div<{ overflow?: string }>`
  position: relative;
  top: 0.5rem;
  border-radius: 1rem;
  background-color: ${colors.background};
  z-index: 10;
  display: grid;
  column-gap: 4px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  transition: 0.5s;

  &:after {
    position: absolute;
    top: -15px;
    transform: translate(100%, 0%);
    content: "";
    width: 0;
    height: 0;
    border: 8px solid transparent;
    border-bottom: 8px solid ${colors.background};
  }
`;
