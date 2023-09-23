import { TabType } from "@/types/type";
import { atom } from "recoil";
export type InitAllTab = Pick<TabType, "name" | "code" | "icon"> & {
  idx: number;
} & {
  tabPage: number;
} & { isCurTab: boolean };

export const allTabState = atom<InitAllTab[]>({
  key: "allTabState",
  default: [],
});
