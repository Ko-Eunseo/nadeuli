import { colors } from "@/styles/colors";
import { styled } from "styled-components";

const StyledTag = styled.div<{ $bg?: keyof typeof colors }>`
  display: inline-block;
  padding: 0.2rem 0.5rem;
  margin-right: 0.2rem;
  background-color: ${({ $bg }) => ($bg ? colors[$bg] : colors.background)};
  border-radius: 0.5rem;
  color: #ffffff;
`;

export default StyledTag;
