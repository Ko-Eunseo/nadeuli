import Card, { CardData } from "@/components/molecules/card/Card";
import { ContentType } from "@/types/contentType";

interface CardControllerProps {
  contentTypeId: ContentType["id"];
  cardData: CardData[];
}

const CardController = ({ contentTypeId, cardData }: CardControllerProps) => {
  // onClick시 useDetailInfo를 가진 card
  return cardData.map((el, i) => {
    return <Card key={i} data={el} />;
  });
};

export default CardController;
