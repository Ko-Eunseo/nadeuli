import Card, { CardData } from "@/components/molecules/card/Card";
import useModal from "@/hooks/useModal";
import ModalCard from "./ModalCard";

interface CardControllerProps {
  cardData: CardData[];
}

const CardController = ({ cardData }: CardControllerProps) => {
  const { modal } = useModal();
  return (
    <>
      {cardData.map((el, i) => {
        return <Card key={i} data={el} />;
      })}
      {modal.contentId && <ModalCard contentId={modal.contentId} />}
    </>
  );
};

export default CardController;
