import { selector } from "recoil";
import { modalState } from "../atoms/modalState";

export const modalSelector = selector({
  key: "modalSelector",
  get: ({ get }) => get(modalState),
  set: ({ set }, newValue) => set(modalState, newValue),
});
