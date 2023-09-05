import { RelativeBox } from "@/components/atoms/styles";
import SkeletonTabItems from "@/components/atoms/tab/SkeletonTab";
import { CardWrapper, CardGrid } from "@/components/molecules/card/styledCard";
import {
  StyledTabHead,
  StyledTabBody,
} from "@/components/molecules/tab/styles";
import SkeletonList from "../card/SkeletonList";

const SkeletonTab = () => {
  return (
    <RelativeBox>
      <StyledTabHead>
        <SkeletonTabItems />
      </StyledTabHead>
      <StyledTabBody>
        <CardWrapper>
          <CardGrid>
            <SkeletonList />
          </CardGrid>
        </CardWrapper>
      </StyledTabBody>
    </RelativeBox>
  );
};

export default SkeletonTab;
