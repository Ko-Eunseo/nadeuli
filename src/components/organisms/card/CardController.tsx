import Card, { CardData } from "@/components/molecules/card/Card";

interface CardControllerProps {
  cardData: CardData[];
}

const CardController = ({ cardData }: CardControllerProps) => {
  // onClick시 useDetailInfo를 가진 card
  return cardData.map((el, i) => {
    return <Card key={i} data={el} />;
  });
};

export default CardController;
