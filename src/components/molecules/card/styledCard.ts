import { CustomScrollbar } from "@/components/atoms/styles";
import { colors } from "@/styles/colors";
import { styled } from "styled-components";

export const StyledCard = styled.div`
  width: 200px;
  border-radius: 0.5rem;
  background-color: #ffffff;
`;

export const CardWrapper = styled(CustomScrollbar)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-bottom: 2rem;
  position: relative;

  @media (max-width: 959px) {
    margin: 0 auto;
    width: 80%;
    justify-content: start;
    overflow-x: auto;
  }
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: auto;
  grid-gap: 1rem;
  grid-auto-flow: row dense;

  /* @media (min-width: 480px) {
    grid-template-columns: 1fr 1fr;
  } */

  @media (min-width: 700px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media (min-width: 960px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 1280px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

// detail card : @todo 반응형 대응하기
export const StyledDetailCard = styled(CustomScrollbar)`
  display: flex;
  padding: 1rem;
  transition: width 0.5s, height 0.5s;

  @media (max-width: 800px) {
    flex-direction: column;
    text-align: center;
    height: 100%;
    overflow-y: auto;
  }
`;
export const RightSide = styled.div`
  position: fixed;
  right: 2rem;
  top: 1rem;
  z-index: 1;
`;
export const LeftSide = styled.div`
  position: sticky;
  top: 2rem;

  @media (max-width: 800px) {
    top: 0;
  }
`;
export const StyledCardTab = styled.div`
  width: 100%;
  position: relative;
  @media (max-width: 800px) {
    background-color: ${colors.background};
  }
`;
export const StyledCardTabBody = styled(CustomScrollbar)`
  text-indent: 5px;
  line-height: 1.3rem;
  overflow: auto;
  height: 100%;
  width: 100%;
  position: absolute;

  @media (max-width: 800px) {
    position: relative;
  }
`;

export const StyledCourseCard = styled.div`
  margin: 1rem 0 1rem 1rem;

  @media (max-width: 800px) {
    margin: 0;
  }
`;
