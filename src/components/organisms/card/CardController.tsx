import Card, { CardData } from "@/components/molecules/card/Card";
import { ContentType } from "@/types/contentType";

interface CardControllerProps {
  contentTypeId: ContentType["id"];
  cardData: CardData[];
}

const CardController = ({ contentTypeId, cardData }: CardControllerProps) => {
  // 카드에 필요한 데이터
  // 1. 사진 2. 지역명, 3. 장소명,
  return cardData.map((el, i) => {
    return <Card key={i} data={el} />;
  });
};

export default CardController;
