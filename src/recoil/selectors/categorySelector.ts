import { selector } from "recoil";
import { categoryState } from "../atoms/categoryState";

export const categorySelector = selector({
  key: "categorySelector",
  get: ({ get }) => get(categoryState),
  set: ({ set }, newValue) => set(categoryState, newValue),
});
