import { useState } from "react";
import { iconType } from "@/variables/icons";
import { combineCategoriesWithIcons } from "@/utills/getIconMap";
import { UseQueryResult } from "@tanstack/react-query";

const useTab = (
  // initialTab: number,
  callback: () => UseQueryResult<any, unknown>,
  icons: iconType[]
) => {
  const [curTab, setCurTab] = useState<string>(""); // 초기값 설정 추상화 필요!
  const tabList = combineCategoriesWithIcons({ callback, icons });

  return { tabState: { curTab, setCurTab }, tabList };
};

export default useTab;
