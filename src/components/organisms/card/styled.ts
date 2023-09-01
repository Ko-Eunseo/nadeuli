import { colors } from "@/styles/colors";
import { styled } from "styled-components";

export const StyledCardList = styled.section`
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
`;

export const OverFlowHidden = styled.section`
  width: 100%;
  overflow: hidden;
  /* overflow-x: scroll; */
`;

export const HorizontalCardList = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(10, 1fr);
`;

export const HorizontalWrapper = styled.div`
  overflow-x: auto;
  width: 100%;
  padding: 1rem;
  margin-bottom: 5rem;
  background-color: ${colors.green};
  scroll-padding: 0 1rem;
  //스크롤바: width를 줘야 스타일이 먹는다.
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 0.5rem;
    background: ${colors.green};
  }
`;
