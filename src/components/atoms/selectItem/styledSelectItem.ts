import { sizes } from "@/styles/CharStyle";
import { colors } from "@/styles/colors";
import { styled } from "styled-components";

const StyledSelectItem = styled.option`
  padding: 0.5rem 0.8rem;
  border-radius: 2rem;
  color: black;
  font-size: ${sizes.sm};
  line-height: 150%;
  transition: 0.5s;

  &:hover {
    background-color: ${colors.yellow};
    color: #ffffff;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }
`;

export default StyledSelectItem;
