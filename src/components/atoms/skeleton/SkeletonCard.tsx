import { StyledCard } from "@/components/molecules/card/styledCard";
import { Padding } from "../styles";
import { SkeletonStyle } from "./styled";
import SkeletonImg from "./SkeletonImg";
import SkeletonTxt from "./SkeletonTxt";

const SkeletonCard = () => {
  return (
    <SkeletonStyle>
      <StyledCard>
        <SkeletonImg />
        <Padding>
          <SkeletonTxt $height={20} />
          <SkeletonTxt $width={180} />
        </Padding>
      </StyledCard>
    </SkeletonStyle>
  );
};

export default SkeletonCard;
