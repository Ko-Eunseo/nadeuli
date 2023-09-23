import { selector } from "recoil";
import { allTabState } from "../atoms/tabState";

export const tabSelector = selector({
  key: "allTabSelector",
  get: ({ get }) => get(allTabState),
  set: ({ set }, newValue) => set(allTabState, newValue),
});
