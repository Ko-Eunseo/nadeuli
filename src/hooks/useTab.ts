import { useState } from "react";
import { iconType } from "@/variables/icons";
import { combineCategoriesWithIcons } from "@/utills/getIconMap";
import { TabType } from "@/types/type";

export type InitTab = TabType & { idx: number };

const useTab = ({
  category,
  icons,
}: {
  category: TabType[];
  icons?: iconType[];
}) => {
  const initialTab: InitTab = { name: "", code: "", idx: 0 };
  const [curTab, setCurTab] = useState<InitTab>(initialTab);

  let tabList;

  if (icons) {
    tabList = combineCategoriesWithIcons({ category, icons });
  } else {
    tabList = category;
  }

  return { tabState: { curTab, setCurTab }, tabList };
};

export default useTab;
