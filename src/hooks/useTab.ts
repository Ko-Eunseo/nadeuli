import { useEffect, useState } from "react";
import { iconType } from "@/variables/icons";
import { combineCategoriesWithIcons } from "@/utills/getIconMap";
import { TabType } from "@/types/type";
import { InitAllTab, allTabState } from "@/recoil/atoms/tabState";
import { useRecoilState } from "recoil";

const useTab = ({
  category,
  icons,
}: {
  category: TabType[];
  icons?: iconType[];
}) => {
  const [allTab, setAllTab] = useRecoilState(allTabState);

  let tabList: any;

  if (icons) {
    tabList = combineCategoriesWithIcons({ category, icons });
  } else {
    tabList = category;
  }
  useEffect(() => {
    //tabData 세팅, curTab 0번인덱스로 설정.
    const initAllTab = tabList?.map((tab: any, idx: number) => ({
      isCurTab: idx === 0 ? true : false,
      code: tab.code,
      name: tab.name,
      icon: tab.icon,
      idx: idx,
      tabPage: 1,
    }));
    setAllTab(initAllTab);
  }, [tabList?.length !== 0]);

  const handleCurTab = (tab: InitAllTab) => {
    setAllTab((prevAllTab) => {
      return prevAllTab.map((prevTab) => ({
        ...prevTab,
        isCurTab: prevTab.code === tab.code,
        tabPage: prevTab.code === tab.code ? tab.tabPage : prevTab.tabPage,
      }));
    });
  };

  const handleTabPage = (tabCode: string | undefined, tabPage: number) => {
    if (!tabCode) return;

    setAllTab((prevAllTab) => {
      return prevAllTab.map((prevTab) => ({
        ...prevTab,
        tabPage: prevTab.code === tabCode ? tabPage : prevTab.tabPage,
      }));
    });
  };

  return { tabList: allTab, handleCurTab, handleTabPage };
};

export default useTab;
