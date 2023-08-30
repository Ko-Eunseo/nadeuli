import { selector } from "recoil";
import { selectState } from "../atoms/selectState";

export const selectOptionSelector = selector({
  key: "selectOptionSelector",
  get: ({ get }) => get(selectState),
  set: ({ set }, newValue) => set(selectState, newValue),
});
