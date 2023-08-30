import { Cat2 } from "@/types/course";
import { atom } from "recoil";

export const categoryState = atom<Cat2[]>({
  key: "categoryState",
  default: [],
});
