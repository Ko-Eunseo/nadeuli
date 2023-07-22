import { colors } from "@/styles/colors";
import { styled } from "styled-components";

const StyledTag = styled.div<{ backgroundColor?: string }>`
  display: inline-block;
  padding: 0.5rem 0.8rem;
  margin-right: 0.2rem;
  background-color: ${({ backgroundColor }) =>
    backgroundColor || colors.background};
  border-radius: 0.5rem;
`;

export default StyledTag;
