import { CustomScrollbar } from "@/components/atoms/styles";
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
`;

export const HorizontalCardList = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(10, 1fr);
`;

export const HorizontalWrapper = styled(CustomScrollbar)`
  overflow-x: auto;
  width: 100%;
  padding: 1.5rem 2rem 2rem;
  margin-bottom: 5rem;
  background-color: ${colors.green};
  scroll-padding: 0 1rem;
`;
