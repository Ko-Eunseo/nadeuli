import { sizes } from "@/styles/CharStyle";
import { styled } from "styled-components";

export const StyledTabItem = styled.a`
  text-decoration: none;
  color: white;
  margin-top: 0.2rem;
  text-align: center;
  font-size: ${sizes.xs};

  &:hover,
  &:active {
    opacity: 1;
  }
`;

export const StyledTabItemLi = styled.li<{ $active: boolean }>`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  opacity: ${({ $active }) => ($active ? "1" : "0.6")};

  &:hover {
    opacity: 1;
    scale: calc(1.1);
  }

  @media (max-width: 1000px) {
    margin-right: 0;
    margin: 0;
    &::after {
      display: none;
    }
  }

  @media (max-width: 500px) {
    padding: 0.5rem;
  }
`;
