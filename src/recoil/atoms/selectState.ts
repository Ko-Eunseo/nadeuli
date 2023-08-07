import { atom } from "recoil";

// export interface Selected {
//   [label: string]: string;
// }

export interface Selected {
  id: string; //label
  value: string;
  code: number | string;
}

export const selectState = atom<Selected[]>({
  key: "selectState",
  default: [],
});
