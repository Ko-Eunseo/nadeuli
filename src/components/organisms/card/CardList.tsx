import CardController from "./CardController";
import { CardGrid } from "@/components/molecules/card/styledCard";
import { Suspense } from "react";
import SkeletonList from "./SkeletonList";
import Nodata from "@/components/molecules/noData/Nodata";
import { CardData } from "@/components/molecules/card/Card";

interface CardListProps {
  cardData: CardData[];
}
const CardList = ({ cardData }: CardListProps) => {
  return (
    <CardGrid>
      <Suspense fallback={<SkeletonList />}>
        {cardData ? (
          <CardController cardData={cardData} />
        ) : (
          <Nodata text="관련 정보가 없습니다." size="md" weight="thin" />
        )}
      </Suspense>
    </CardGrid>
  );
};

export default CardList;
