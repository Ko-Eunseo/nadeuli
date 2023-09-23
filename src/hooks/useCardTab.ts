import { useEffect, useState } from "react";
import { iconType } from "@/variables/icons";
import { TabType } from "@/types/type";

export type InitTab = TabType & { idx: number };

const useCardTab = ({
  category,
}: {
  category: TabType[];
  icons?: iconType[];
}) => {
  const initialTab: InitTab = { name: "", code: "", idx: 0 };
  const [curTab, setCurTab] = useState<InitTab>(initialTab);

  return { tabState: { curTab, setCurTab }, tabList: category };
};

export default useCardTab;
