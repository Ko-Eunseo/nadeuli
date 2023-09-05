import { styled } from "styled-components";

export const BtnLayout = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  position: absolute;
  transform: translate(0%, -50%);
  top: 50%;
  left: 0;
  z-index: 1;
`;

export const LeftBtn = styled.div`
  position: absolute;
  left: 0;
  padding-left: 1rem;
  @media (max-width: 600px) {
    padding-left: 0;
  }
`;
export const RightBtn = styled.div`
  position: absolute;
  right: 0;
  padding-right: 1rem;
  @media (max-width: 600px) {
    padding-left: 0;
  }
`;
