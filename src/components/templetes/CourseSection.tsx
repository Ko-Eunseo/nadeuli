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
import { recoilTabState } from "@/recoil/atoms/tabState";

const CourseSection = () => {
  const [selection] = useRecoilState<Selected[]>(selectOptionSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const areaCode = getValueFromArr(selection, "where") as Area["code"];
  const { data: categories } = useCategory();

  useEffect(() => {
    categories && setCategory(categories?.response?.body?.items?.item);
  }, [categories, setCategory]);

  const { tabState, tabList } = useTab({
    category,
    icons: icons,
  });

  // @todo 데이터 리코일로 관리하기
  const { data, isLoading } = useThemeCourseTour({
    areaCode: areaCode || 1,
    cat2: (tabState.curTab.code as Cat2["code"]) || "C0112",
  });
  const cardData = data?.response?.body?.items?.item || [];

  return (
    <>
      <Tab tabList={tabList} tabState={tabState} cardData={cardData} />
    </>
  );
};

export default CourseSection;
