import CardController from "./CardController";
import { Selected } from "@/recoil/atoms/selectState";
import { ContentType } from "@/types/contentType";
import { useAreaBasedTourInfo } from "@/hooks/useTourInfo";
import { getValueFromArr } from "@/utills/getValWithId";
import { StyledCardList } from "./styled";

interface CardListProps {
  selection: Selected[];
}
const CardList = ({ selection }: CardListProps) => {
  const contentTypeId = getValueFromArr(selection, "what");

  const { data, isLoading } = useAreaBasedTourInfo();

  const cardData = data?.response?.body?.items?.item || [];

  return (
    <StyledCardList>
      <CardController
        contentTypeId={contentTypeId as ContentType["id"]}
        cardData={cardData}
      />
    </StyledCardList>
  );
};

export default CardList;
