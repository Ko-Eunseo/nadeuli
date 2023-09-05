import { colors } from "@/styles/colors";
import { css, styled } from "styled-components";

export const Box = styled.div`
  max-width: 600px;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    min-height: 24vh;
  }
`;

export const CenterBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;
`;

export const Margin = styled.div<{ $margin?: string }>`
  margin: ${({ $margin }) => ($margin ? $margin : "8px")};
`;

export const Padding = styled.div<{ $padding?: string }>`
  padding: ${({ $padding }) => ($padding ? $padding : "8px")};
`;
export const RelativeBox = styled.div`
  position: relative;
`;

//스크롤바: width를 줘야 스타일이 먹는다.
export const CustomScrollbar = styled.div`
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 0.5rem;
    background: ${colors.green};
  }
  &::-webkit-scrollbar-track {
    background: #ffffff;
    border-radius: 10px;
  }
`;
