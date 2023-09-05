import { colors } from "@/styles/colors";
import { styled } from "styled-components";
import { StyledDefaultImg } from "../content/styled";

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

export const SkeletonImgBox = styled(StyledDefaultImg)<{
  $width?: string;
  $height?: string;
}>``;
