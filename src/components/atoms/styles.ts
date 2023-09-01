import { styled } from "styled-components";

export const Box = styled.div`
  max-width: 600px;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    min-height: 30vh;
  }
`;

export const CenterBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;
`;

export const Margin8 = styled.div`
  margin: 8px;
`;

export const RelativeBox = styled.div`
  position: relative;
`;
