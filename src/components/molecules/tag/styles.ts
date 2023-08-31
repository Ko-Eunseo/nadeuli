import { styled } from "styled-components";

export const SelectTag = styled.li`
  cursor: pointer;
  opacity: 0.999; //드래그시 배경색 제거

  @media (max-width: 600px) {
    display: none;
  }
`;
