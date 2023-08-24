import TabBody from "@/components/molecules/tab/TabBody";
import TabHead from "@/components/molecules/tab/TabHead";
import { useState } from "react";
import { StyledTab } from "./styles";
import { Cat2List } from "@/variables/courseCategory";
import { Area } from "@/types/area";
import { useThemeCourseTour } from "@/hooks/useTourInfo";
import { Cat2 } from "@/types/course";

const Tab = ({
  areaCode,
  tabList,
}: {
  areaCode: Area["code"];
  tabList: Cat2List; //@todo: 추상화하기
}) => {
  const [curTab, setCurTab] = useState("C0112");

  const { data, isLoading } = useThemeCourseTour({
    areaCode: areaCode || 1,
    cat2: curTab as Cat2["code"],
  });
  const cardData = data?.response?.body?.items?.item || [];

  return (
    <StyledTab>
      <TabHead tabList={tabList} setCurTab={setCurTab} curTab={curTab} />
      <TabBody tabCategory={tabList} curTab={curTab} cardData={cardData} />
    </StyledTab>
  );
};

export default Tab;
