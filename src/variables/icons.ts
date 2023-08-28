import { IconType } from "react-icons";
import { GiFamilyHouse, GiCampingTent } from "react-icons/gi";
import {
  MdCardTravel,
  MdNaturePeople,
  MdOutlineDirectionsWalk,
  MdFoodBank,
} from "react-icons/md";

export const icons: { name: string; icon: IconType }[] = [
  {
    name: "가족여행",
    icon: GiFamilyHouse,
  },
  {
    name: "혼자여행",
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
