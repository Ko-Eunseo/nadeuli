import { colors } from "@/styles/colors";
import { styled } from "styled-components";

export const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 60%;
  background-color: ${colors.background};
  padding: 1rem;
  border-radius: 1rem;
  z-index: 10;
  overflow: hidden;

  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

export const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  z-index: 5;
  background-color: ${colors.gray};
  opacity: 0.2;
`;
