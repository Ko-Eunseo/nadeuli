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
  padding-bottom: 2rem;
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

// detail card : @todo 반응형 대응하기
export const StyledDetailCard = styled.div`
  display: flex;
  padding: 1rem;
  transition: width 0.5s, height 0.5s;
  overflow: hidden; //
`;
export const RightSide = styled.div`
  position: fixed;
  right: 1rem;
  top: 1rem;
`;
export const LeftSide = styled.div`
  position: sticky;
  top: 2rem;
`;
export const StyledCardTab = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
`;
export const StyledCardTabBody = styled.div`
  margin: 1rem;
  text-indent: 5px;
  line-height: 1.3rem;
`;
export const StyledCourseCard = styled.div`
  margin: 1rem 0 1rem 1rem;
  overflow-y: auto;
  max-height: 300px;
`;
