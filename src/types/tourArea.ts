import { Area } from "./area";
import { ContentType } from "./contentType";
import { Category } from "./category";
// 지역기반 관광정보 조회
// endpoint: /areaBasedList1

export interface AreaT {
  addr1: string;
  addr2: string;
  areacode: Area["code"];
  booktour: string;
  cat1: `${Category["code"]}`;
  cat2: string;
  cat3: string;
  contentid: string;
  contenttypeid: `${ContentType["id"]}`;
  createdtime: string;
  firstimage: string;
  firstimage2: string;
  cpyrhtDivCd: string;
  mapx: string;
  mapy: string;
  mlevel: string;
  modifiedtime: string;
  sigungucode: string;
  tel: string;
  title: string;
  zipcode: string;
}
