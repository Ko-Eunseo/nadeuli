import { styled } from "styled-components";

export const StyledContentBox = styled.div`
  margin-left: 0.5rem;
`;

export const StyledDefaultImg = styled.div<{
  $width?: string;
  $height?: string;
}>`
  background: url("data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg==");
  width: ${({ $width }) => ($width ? $width : "200px")};
  height: ${({ $height }) => ($height ? $height : "200px")};
  border-radius: 0.5rem 0.5rem 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
