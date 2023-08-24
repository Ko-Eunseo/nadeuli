import { colors } from "@/styles/colors";
import { styled } from "styled-components";

export const StyledTabHead = styled.nav`
  margin: 1rem 1rem 0;
  display: flex;
  justify-content: space-around;
`;

export const StyledTabBody = styled.div`
  background-color: ${colors.yellow};
  padding: 1rem;
  width: 100%;
  min-height: 50vh;
  border-radius: 1rem;
  margin: 0 1rem;
`;

export const StyledTabBox = styled.section<{ active: boolean }>`
  display: ${({ active }) => (active ? "block" : "none")};
`;
