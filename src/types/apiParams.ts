import { Area } from "./area";
import { ContentType } from "./contentType";
import { Endpoint } from "./endPoint";

interface BasicParams {
  endpoint?: Endpoint["endpoint"];
}

export interface AreaParams extends BasicParams {
  service: string;
  areaCode?: Area["code"];
}
export interface CategoryParams extends BasicParams {
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

export interface LocationParams extends CategoryParams {
  mapX: number;
  mapY: number;
}

export type URL_TYPE =
  | SearchKeywordParams
  | SearchFestivalParams
  | AreaParams
  | AreaBasedParams
  | DetailInfoParams
  | CategoryParams;
