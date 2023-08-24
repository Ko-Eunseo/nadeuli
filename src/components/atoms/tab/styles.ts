import { colors } from "@/styles/colors";
import { styled } from "styled-components";

export const StyledTabItem = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: white;
  padding: 1rem;
  text-align: center;
  &:hover,
  &:active {
    color: black;
  }
`;

export const StyledTabItemLi = styled.li<{ active: boolean }>`
  list-style: none;
  margin: 1rem 1rem 0;
  padding: 1rem;
  position: relative;
  background-color: ${colors.yellow};
  border-radius: 0.5rem 0 0;
  opacity: ${({ active }) => (active ? "1" : "0.6")};

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
    background-color: ${colors.yellow};
    width: 50%;
    height: 100%;
    transform: translate(150%, 0) skew(30deg);
    border-radius: 0 1rem;
  }

  &:hover {
    opacity: 1;
  }
`;
