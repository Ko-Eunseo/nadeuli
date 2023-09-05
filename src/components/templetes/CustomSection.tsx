"use client";

import React from "react";
import { useRecoilState } from "recoil";
import { Selected } from "@/recoil/atoms/selectState";
import CardList from "../organisms/card/CardList";
import { CardWrapper } from "../molecules/card/styledCard";
import { selectOptionSelector } from "@/recoil/selectors/selectOptionSelector";
import Title from "../molecules/title/Title";
import { CenterBox } from "../atoms/styles";
import usePageBtn from "@/hooks/usePageBtn";
import { useAreaBasedTourInfo } from "@/hooks/useTourInfo";
import { Area } from "@/types/area";
import { ContentType } from "@/types/contentType";
import { Endpoint } from "@/types/endPoint";
import { getData } from "@/utills/getData";
import { getLastPage } from "@/utills/getLastPage";
import { getValueFromArr } from "@/utills/getValWithId";
import PageBtns from "../molecules/button/PageBtns";
import { RelativeBox } from "../atoms/styles";

const CustomSection = ({ isSelect }: { isSelect: boolean }) => {
  const [selection] = useRecoilState<Selected[]>(selectOptionSelector);

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
    <RelativeBox>
      <CenterBox>
        {isSelect ? (
          selection?.map((tag, i) => (
            <Title key={i} type="main" text={`#${tag.value}`} />
          ))
        ) : (
          <Title type="main" text="내 여행 테마는?" />
        )}
      </CenterBox>
      <PageBtns
        pageNo={pageNo}
        lastPage={lastPage}
        handlePrev={handlePrev}
        handleNext={handleNext}
      />
      <CardWrapper>
        <CardList cardData={cardData?.itemList} />
      </CardWrapper>
    </RelativeBox>
  );
};

export default CustomSection;
