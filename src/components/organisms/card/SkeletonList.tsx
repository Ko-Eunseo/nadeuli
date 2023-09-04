import Skeleton from "@/components/atoms/skeleton/SkeletonCard";

const SkeletonList = ({ len = 10 }: { len?: number }) => {
  return (
    <>
      {Array.from({ length: len }).map((_, i) => {
        return <Skeleton key={i} />;
      })}
    </>
  );
};

export default SkeletonList;
