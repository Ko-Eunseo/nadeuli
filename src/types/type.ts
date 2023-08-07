export type RESPONSE_OK = "OK";
export type RESPONSE_ERROR = "ERROR";

export interface TagType {
  id?: number;
  code?: string | number;
  name: string;
  rnum?: number;
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
