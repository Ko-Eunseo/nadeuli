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
`;
