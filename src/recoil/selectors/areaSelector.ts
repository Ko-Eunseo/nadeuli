import { selector } from "recoil";
import { areaState } from "../atoms/areaState";

export const areaSelector = selector({
  key: "areaSelector",
  get: ({ get }) => get(areaState),
  set: ({ set }, newValue) => set(areaState, newValue),
});
