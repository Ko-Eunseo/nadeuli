import { Area } from "@/types/area";
import { atom } from "recoil";

export const areaState = atom<Area[]>({
  key: "areaState",
  default: [],
});
