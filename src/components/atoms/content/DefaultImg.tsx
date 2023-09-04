import { StyledDefaultImg } from "./styled";
import logo_gray from "@/../public/assets/logo_gray.svg";
import Image from "next/image";

const DefaultImg = ({
  $width,
  $height,
}: {
  $width?: string;
  $height?: string;
}) => {
  return (
    <StyledDefaultImg $width={$width} $height={$height}>
      <Image src={logo_gray} alt="nadeuli's logo" width="100" height="200" />
    </StyledDefaultImg>
  );
};

export default DefaultImg;
