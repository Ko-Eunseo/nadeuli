import { colors } from "@/styles/colors";
import styled from "styled-components";
import billboard from "@/../public/assets/billboard.png";
import { CenterBox } from "../atoms/styles";

export const SelectBox = styled(CenterBox)`
  padding: 0.5rem 0.8rem;
  background-color: ${colors.background};
  border-radius: 2rem;
  margin-bottom: 3rem;
`;

export const SelectComment = styled.p`
  display: inline-block;
  margin: 0 0.5rem;
`;

export const BGImage = styled.div`
  background-image: url(${billboard.src});
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 3rem;
`;

export const Display = styled.div`
  text-align: center;
  color: #ffffff;
  margin: 5rem 0;
`;

export const TagBox = styled(CenterBox)`
  padding-bottom: 1rem;
  flex-wrap: wrap;
`;

export const TagList = styled.ul`
  padding: 0;
  margin: 0;
  display: grid;
  grid: repeat(3, 1fr) / auto-flow auto;
  grid-gap: 0.5rem;
`;

export const Arrow = styled.div`
  display: flex;
  justify-content: center;
  transform: translate(0, 10px);
`;
