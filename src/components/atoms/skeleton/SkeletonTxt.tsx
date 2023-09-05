import Image from "next/image";
import { SkeletonStyle } from "./styled";

const SkeletonTxt = ({
  $width = 100,
  $height = 16,
}: {
  $width?: number;
  $height?: number;
}) => {
  return (
    <SkeletonStyle>
      <Image
        width={$width}
        height={$height}
        src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
        alt="loading"
        style={{ borderRadius: "0.5rem" }}
      />
    </SkeletonStyle>
  );
};

export default SkeletonTxt;
