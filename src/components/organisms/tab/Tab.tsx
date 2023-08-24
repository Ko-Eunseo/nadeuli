import TabBody from "@/components/molecules/tab/TabBody";
import TabHead from "@/components/molecules/tab/TabHead";
import { useState } from "react";
import { StyledTab } from "./styles";
import { Cat2List } from "@/variables/courseCategory";
import { Area } from "@/types/area";

const Tab = ({
  areaCode,
  tabList,
}: {
  areaCode: Area["code"];
  tabList: Cat2List; //@todo: 추상화하기
}) => {
  const [curTab, setCurTab] = useState("");

  return (
    <StyledTab>
      <TabHead tabList={tabList} setCurTab={setCurTab} curTab={curTab} />
      <TabBody areaCode={areaCode} tabCategory={tabList} curTab={curTab} />
    </StyledTab>
  );
};

export default Tab;
