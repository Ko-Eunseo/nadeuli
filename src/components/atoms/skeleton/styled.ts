import { styled } from "styled-components";

export const SkeletonStyle = styled.div`
  @keyframes skeletonAni {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }
  animation: skeletonAni 1.5s ease-in-out 0.5s infinite;
`;
