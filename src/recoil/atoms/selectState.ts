import { atom } from "recoil";

export interface Selected {
  [label: string]: string;
}

export const selectState = atom<Selected[]>({
  key: "selectState",
  default: [],
});
