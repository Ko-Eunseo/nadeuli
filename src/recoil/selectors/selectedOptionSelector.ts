import { selector } from "recoil";
import { selectState } from "../atoms/selectState";

export const selectedOptionSelector = selector({
  key: "selectedOptionSelector",
  get: ({ get }) => {
    //selectState가 바뀌면 재실행된다.
    const selectedOption = get(selectState);
  },
});
