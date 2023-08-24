import { styled } from "styled-components";

export const StyledCardList = styled.section`
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
`;

export const OverFlowHidden = styled.section`
  width: 100%;
  overflow-x: scroll;
`;

export const HorizontalCardList = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
`;