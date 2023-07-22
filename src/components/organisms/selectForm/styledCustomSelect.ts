import { colors } from "@/styles/colors";
import { styled } from "styled-components";

export const StyledCustomSelect = styled.div`
  display: inline-block;
  position: relative;
  cursor: pointer;
  background-color: ${colors.yellow};
  border-radius: 2rem;
`;

export const SelectIcon = styled.button`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border: 0;
  background-color: ${colors.background};
  margin: 0.5rem;
`;
