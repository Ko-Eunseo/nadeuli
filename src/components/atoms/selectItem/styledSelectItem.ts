import { colors } from "@/styles/colors";
import { styled } from "styled-components";

// color 받아서 나오도록 수정하기
const StyledSelectItem = styled.option`
  background-color: ${colors.yellow};
  padding: 0.5rem 0.8rem;
  border-radius: 2rem;
`;

export default StyledSelectItem;
