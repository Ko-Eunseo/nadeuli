import { Area } from "./area";
import { ContentType } from "./contentType";

export interface AreaParams {
  service: string;
  areaCode?: Area["code"];
}
export interface CategoryParams {
  service: string;
  contentTypeId?: ContentType["id"];
}

export interface AreaBasedParams extends AreaParams {
  contentTypeId?: ContentType["id"];
}

export interface DetailInfoParams extends CategoryParams {
  contentId?: string;
}

export interface SearchKeywordParams extends CategoryParams {
  keyword: string;
}

export interface SearchFestivalParams extends AreaParams {
  eventStartDate: string; //YYYYMMDD
}

export type URL_TYPE =
  | SearchKeywordParams
  | SearchFestivalParams
  | AreaParams
  | AreaBasedParams
  | DetailInfoParams
  | CategoryParams;
