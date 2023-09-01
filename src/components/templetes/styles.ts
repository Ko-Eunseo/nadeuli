import { colors } from "@/styles/colors";
import styled from "styled-components";
import billboard from "@/../public/assets/billboard.png";
import { CenterBox } from "../atoms/styles";
import { sizes } from "@/styles/CharStyle";

export const SelectBox = styled(CenterBox)`
  padding: 0.5rem 0.8rem;
  background-color: ${colors.background};
  border-radius: 2rem;
  margin-bottom: 3rem;

  @media (max-width: 600px) {
    flex-wrap: wrap;
    justify-content: flex-start;
    background-color: transparent;
    margin: 0 auto;
    max-width: 400px;
  }
`;

export const SelectComment = styled.p`
  display: inline-block;
  margin: 0 0.5rem;
  font-size: ${sizes.sm};

  @media (max-width: 600px) {
    margin: 0.5rem;
    color: white;
  }
`;

export const BGImage = styled.div`
  background-image: url(${billboard.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin-bottom: 3rem;
`;

export const Display = styled.div`
  text-align: center;
  color: #ffffff;
  margin: 5rem 0;

  @media (max-width: 600px) {
    margin: 2rem 0;
  }
`;

export const TagBox = styled(CenterBox)`
  padding-bottom: 1rem;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const TagList = styled.ul`
  padding: 0;
  margin: 0;
  display: grid;
  grid: repeat(5, 1fr) / auto-flow auto;
  grid-gap: 0.5rem;

  @media (min-width: 700px) {
    grid: repeat(4, 1fr) / auto-flow auto;
  }

  @media (min-width: 701px) {
    grid: repeat(3, 1fr) / auto-flow auto;
  }
`;

export const Arrow = styled.div`
  display: flex;
  justify-content: center;
  transform: translate(0, 10px);
`;

export const FullPage = styled.section`
  max-width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  &::-webkit-scrollbar {
    display: none;
  }
`;
