import { StyledCard } from "@/components/molecules/card/styledCard";
import Image from "next/image";
import { Margin8 } from "../styles";
import { SkeletonStyle } from "./styled";

const Skeleton = () => {
  return (
    <SkeletonStyle>
      <StyledCard>
        <Image
          src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
          alt="loading"
          width={200}
          height={200}
          style={{ borderRadius: "0.5rem 0.5rem 0 0" }}
        />
        <Margin8>
          <Image
            width={100}
            height={20}
            src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
            alt="loading"
          />
          <Image
            width={180}
            height={30}
            src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
            alt="loading"
            style={{ marginBottom: "0.5rem" }}
          />
        </Margin8>
      </StyledCard>
    </SkeletonStyle>
  );
};

export default Skeleton;
