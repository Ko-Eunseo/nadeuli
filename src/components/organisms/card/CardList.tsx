import CardController from "./CardController";
import { Selected } from "@/recoil/atoms/selectState";
import { ContentType } from "@/types/contentType";
import { useAreaBasedTourInfo } from "@/hooks/useTourInfo";
import { getValueFromArr } from "@/utills/getValWithId";
import { StyledCardList } from "./styled";
import { Area } from "@/types/area";
import { Endpoint } from "@/types/endPoint";
import { CardGrid } from "@/components/molecules/card/styledCard";

interface CardListProps {
  selection: Selected[];
}
const CardList = ({ selection }: CardListProps) => {
  const endpoint = getValueFromArr(selection, "who") as Endpoint["endpoint"];
  const contentTypeId = getValueFromArr(selection, "what") as ContentType["id"];
  const areaCode = getValueFromArr(selection, "where") as Area["code"];

  const { data, isLoading } = useAreaBasedTourInfo({
    endpoint,
    areaCode,
    contentTypeId,
  });
  const cardData = data?.response?.body?.items?.item || [];

  return (
    <CardGrid>
      <CardController cardData={cardData} />
    </CardGrid>
  );
};

export default CardList;
