import Skeleton from "@/components/atoms/skeleton/Skeleton";
import { CardGrid } from "@/components/molecules/card/styledCard";
import { loadComponentNtime } from "@/utills/loadComponentNtime";

const SkeletonList = () => {
  return (
    <>
      <CardGrid>{loadComponentNtime(<Skeleton />, 10)}</CardGrid>
    </>
  );
};

export default SkeletonList;
