import { colors } from "@/styles/colors";
import { styled } from "styled-components";

export const StyledTabHead = styled.nav`
  display: flex;
  background-color: ${colors.green};
  border-radius: 2rem;
  width: fit-content;
  margin: 0 auto;
  padding: 0 1rem;

  @media (max-width: 800px) {
    overflow-x: scroll;
    position: absolute;

    &::-webkit-scrollbar {
      background: transparent;
    }
  }

  @media (max-width: 700px) {
    width: 100%;
  }
`;

export const StyledTabBody = styled.div`
  /* background-color: ${colors.yellow}; */
  padding: 1rem;
  min-height: 80vh;
  min-width: 90vw;
  border-radius: 1rem;
  margin: 0 auto;

  @media (max-width: 900px) {
    width: 95vw;
  }

  @media (max-width: 800px) {
    border-radius: 0.5rem;
    padding-top: 50px;
  }
`;

export const StyledTabBox = styled.section<{ $active: boolean }>`
  display: ${({ $active }) => ($active ? "block" : "none")};
`;
