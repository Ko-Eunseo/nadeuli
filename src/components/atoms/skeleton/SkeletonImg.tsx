import Image from "next/image";
import logo_gray from "@/../public/assets/logo_gray.svg";
import { SkeletonImgBox, SkeletonStyle } from "./styled";

const SkeletonImg = () => {
  return (
    <SkeletonStyle>
      <SkeletonImgBox>
        <Image
          src={logo_gray}
          alt="loading"
          width={150}
          height={200}
          style={{ borderRadius: "0.5rem 0.5rem 0 0" }}
        />
      </SkeletonImgBox>
    </SkeletonStyle>
  );
};

export default SkeletonImg;
