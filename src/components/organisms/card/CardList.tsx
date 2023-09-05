import CardController from "./CardController";
import { Selected } from "@/recoil/atoms/selectState";
import { ContentType } from "@/types/contentType";
import { useAreaBasedTourInfo } from "@/hooks/useTourInfo";
import { getValueFromArr } from "@/utills/getValWithId";
import { Area } from "@/types/area";
import { Endpoint } from "@/types/endPoint";
import { CardGrid } from "@/components/molecules/card/styledCard";
import PageBtns from "@/components/molecules/button/PageBtns";
import usePageBtn from "@/hooks/usePageBtn";
import { getData } from "@/utills/getData";
import { getLastPage } from "@/utills/getLastPage";
import { Suspense } from "react";
import SkeletonList from "./SkeletonList";

interface CardListProps {
  selection: Selected[];
}
const CardList = ({ selection }: CardListProps) => {
  const endpoint = getValueFromArr(selection, "who") as Endpoint["endpoint"];
  const contentTypeId = getValueFromArr(selection, "what") as ContentType["id"];
  const areaCode = getValueFromArr(selection, "where") as Area["code"];
  const { pageNo, handlePrev, handleNext } = usePageBtn();

  const { data, isLoading } = useAreaBasedTourInfo({
    endpoint,
    areaCode,
    contentTypeId,
    pageNo: pageNo || 1,
  });
  const cardData = getData(data);
  const lastPage = getLastPage(cardData.totalItemNo);

  return (
    <CardGrid>
      <PageBtns
        pageNo={pageNo}
        lastPage={lastPage}
        handlePrev={handlePrev}
        handleNext={handleNext}
      />
      <Suspense fallback={<SkeletonList />}>
        <CardController cardData={cardData.itemList} />
      </Suspense>
    </CardGrid>
  );
};

export default CardList;
