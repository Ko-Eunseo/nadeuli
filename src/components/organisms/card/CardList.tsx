import CardController from "./CardController";
import { Selected } from "@/recoil/atoms/selectState";
import { ContentType } from "@/types/contentType";
import { useAreaBasedTourInfo } from "@/hooks/useTourInfo";
import { getValueFromArr } from "@/utills/getValWithId";
import { StyledCardList } from "./styled";
import { Area } from "@/types/area";

interface CardListProps {
  selection: Selected[];
}
const CardList = ({ selection }: CardListProps) => {
  const contentTypeId = getValueFromArr(selection, "what") as ContentType["id"];
  const areaCode = getValueFromArr(selection, "where") as Area["code"];

  const { data, isLoading } = useAreaBasedTourInfo({ areaCode, contentTypeId });

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
