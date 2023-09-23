"use client";
import { Selected } from "@/recoil/atoms/selectState";
import { Area } from "@/types/area";
import { getValueFromArr } from "@/utills/getValWithId";
import { useRecoilState } from "recoil";
import Tab from "../organisms/tab/Tab";
import { icons } from "@/variables/icons";
import useTab from "@/hooks/useTab";
import useCategory from "@/hooks/useCategory";
import { selectOptionSelector } from "@/recoil/selectors/selectOptionSelector";
import { categoryState } from "@/recoil/atoms/categoryState";
import { useEffect } from "react";
import { useThemeCourseTour } from "@/hooks/useTourInfo";
import { Cat2 } from "@/types/course";
import PageBtns from "../molecules/button/PageBtns";
import { RelativeBox } from "../atoms/styles";
import usePageBtn from "@/hooks/usePageBtn";
import { getData } from "@/utills/getData";
import { getLastPage } from "@/utills/getLastPage";

const CourseSection = () => {
  const [selection] = useRecoilState<Selected[]>(selectOptionSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const areaCode = getValueFromArr(selection, "where") as Area["code"];
  const { data: categories, isLoading: isCategoryLoading } = useCategory();
  const { pageNo, handlePrev, handleNext } = usePageBtn();

  useEffect(() => {
    categories && setCategory(categories?.response?.body?.items?.item);
  }, [categories, setCategory]);

  const { tabList, handleCurTab, handleTabPage } = useTab({
    category,
    icons: icons,
  });

  const curTab =
    tabList.find((tab) => tab.isCurTab === true) ||
    tabList.find((tab) => tab.idx === 0);

  const { data, isLoading } = useThemeCourseTour({
    areaCode: areaCode || 1,
    cat2: (curTab?.code as Cat2["code"]) || "C0112",
    pageNo: curTab?.tabPage,
  });

  const cardData = getData(data);
  const lastPage = getLastPage(cardData.totalItemNo);

  return (
    <RelativeBox>
      <>
        <PageBtns
          pageNo={curTab?.tabPage}
          lastPage={lastPage}
          handlePrev={() => {
            if (pageNo > 1) {
              handlePrev();
              handleTabPage(curTab?.code, pageNo - 1);
            }
          }}
          handleNext={() => {
            handleNext();
            handleTabPage(curTab?.code, pageNo + 1);
          }}
        />
        <Tab
          isLoading={isLoading}
          tabList={tabList}
          handleCurTab={handleCurTab}
          cardData={cardData.itemList}
        />
      </>
    </RelativeBox>
  );
};

export default CourseSection;
