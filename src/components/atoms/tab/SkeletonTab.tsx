import SkeletonTxt from "../skeleton/SkeletonTxt";
import { StyledTabItemLi } from "./styles";

const SkeletonTabItems = ({ length = 6 }: { length?: number }) => {
  return (
    <>
      {Array.from({ length: length }).map((el, i) => {
        return (
          <StyledTabItemLi $active={false} key={i}>
            <SkeletonTxt $width={50} $height={40} />
          </StyledTabItemLi>
        );
      })}
    </>
  );
};

export default SkeletonTabItems;
