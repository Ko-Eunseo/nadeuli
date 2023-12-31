import { colors } from "@/styles/colors";
import { IconType } from "react-icons";

export type RESPONSE_OK = "OK";
export type RESPONSE_ERROR = "ERROR";

export interface DataStructure {
  response: {
    header: {
      resultCode: string;
      resultMsg: RESPONSE_OK | RESPONSE_ERROR | string;
    };
    body: {
      items: {
        item: [];
      };
      numOfRows: number;
      pageNo: number;
      totalCount: number;
    };
  };
}

export interface TagType {
  id?: number | string;
  code?: string | number;
  name: string;
  rnum?: number;
}
export interface OptionhandlerParam {
  id: string;
  selectedValue: string;
  code: number | string;
}
export interface SelectTagType {
  label: string;
  name: TagType["name"];
  code: TagType["code"];
  bg: keyof typeof colors;
}
export interface TabType {
  name: string;
  code: string;
  icon?: IconType | null;
  label?: string;
}

export type LocationBased = "locationBased"; //현재위치기반
export type AreaBased = "areaBased"; //지역기반

export type PetT = "petTour"; //애견동반
export type BarriorFreeT = "barriorFree"; //어린아이, 장애인, 노인
export type SoloT = "soloTour"; //혼자
export type MultiT = "multiTour"; //2인이상
export type FamilyT = "familyTour"; //가족여행, 3인이상

export type TourCourse = "Tcourse";
export type TourContents = "Tcontents";

export type TourType = LocationBased | AreaBased;
export type TourWith = PetT | BarriorFreeT | SoloT | MultiT | FamilyT;
