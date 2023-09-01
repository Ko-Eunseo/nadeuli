import { selector } from "recoil";
import { recoilTabState } from "../atoms/tabState";

export const tabSelector = selector({
  key: "tabSelector",
  get: ({ get }) => get(recoilTabState),
  set: ({ set }, newValue) => set(recoilTabState, newValue),
});
