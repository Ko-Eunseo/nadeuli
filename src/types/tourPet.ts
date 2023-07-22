import { ContentType } from "./contentType";

// endpoint: detailPetTour1
export interface PetTour {
  acmpyPsblCpam: string; //동반가능동물
  relaRntlPrdlst: string; //렌탈 가능 품목
  acmpyNeedMtr: string; // 동반시 필요사항
  relaFrnshPrdlst: string; //비치 품목
  etcAcmpyInfo: string; //기타 동반정보
  relaPurcPrdlst: string; //구매품목
  relaAcdntRiskMtr: string; //사고대비
  acmpyTypeCd: string; //동반유형코드(동반구분)
  relaPosesFclty: string; //구비시설
  contentid: ContentType["id"]; //콘텐츠 아이디
  petTursmInfo: string; //반려견 관광정보
}
