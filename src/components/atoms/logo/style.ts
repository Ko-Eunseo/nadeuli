import { styled } from "styled-components";
import { CenterBox } from "../styles";

export const Glitch = styled.div`
  animation: glitch 1s linear infinite;

  @keyframes glitch {
    2%,
    64% {
      transform: translate(2px, 0) skew(0deg);
    }
    4%,
    60% {
      transform: translate(-2px, 0) skew(0deg);
    }
    62% {
      transform: translate(0, 0) skew(5deg);
    }
  }
`;

export const CenterPosition = styled(CenterBox)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
