import { colors } from "@/styles/colors";
import { styled } from "styled-components";

export const StyledCard = styled.div`
  width: 200px;
  border-radius: 0.5rem;
  /* margin: 0.5rem; */
  background-color: #ffffff;
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 2rem;
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-gap: 1rem;
  grid-auto-flow: row dense;

  @media (min-width: 480px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 700px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (min-width: 960px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 1280px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;
