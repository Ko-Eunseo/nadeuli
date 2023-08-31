import { TabType } from "@/types/type";
import { atom } from "recoil";

interface TabState {
  curTab: TabType;
  tabData: {};
}

export const recoilTabState = atom<TabState[]>({
  key: "tabState",
  default: [],
});
