import { IconType } from "react-icons";
import { GiFamilyHouse, GiCampingTent } from "react-icons/gi";
import {
  MdCardTravel,
  MdNaturePeople,
  MdOutlineDirectionsWalk,
  MdFoodBank,
} from "react-icons/md";

export interface iconType {
  name: string;
  icon: IconType;
}

export const icons: iconType[] = [
  {
    name: "가족코스",
    icon: GiFamilyHouse,
  },
  {
    name: "나홀로코스",
    icon: MdCardTravel,
  },
  {
    name: "힐링코스",
    icon: MdNaturePeople,
  },
  {
    name: "도보코스",
    icon: MdOutlineDirectionsWalk,
  },
  {
    name: "캠핑코스",
    icon: GiCampingTent,
  },
  {
    name: "맛코스",
    icon: MdFoodBank,
  },
];
