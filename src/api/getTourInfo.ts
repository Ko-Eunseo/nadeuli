import { AreaBasedParams } from "@/types/tourArea";
import { createQueryString } from "@/utills/createQueryString";
import { BASIC_URL } from "@/variables/config";
import axios from "axios";

// const service = "/detailPetTour1";

const BASIC_ENDPOINT = "&MobileOS=WIN&MobileApp=nadeuli&_type=json";

export const PetTour = async (service: string) => {
  const url = `${BASIC_URL}${service}?serviceKey=${process.env.NEXT_PUBLIC_ENCODING}`;
  const res = await axios.get(url + BASIC_ENDPOINT);
  return res.data;
};

export const areaBasedList = async ({
  contentTypeId,
  areaCode,
}: AreaBasedParams) => {
  const ENDPOINT = "/areaBasedList1";
  const PARAMS = {
    numOfRows: 10,
    MobileOS: "ETC", //접속기기에따라 인식하는법 찾기
    MobileApp: "nadeuli",
    _type: "json",
    contentTypeId,
    areaCode,
    serviceKey: `?serviceKey=${process.env.NEXT_PUBLIC_ENCODING}`,
  };
  const URL = BASIC_URL + ENDPOINT + "?" + createQueryString(PARAMS);
  // console.log(URL);

  const res = await axios.get(URL);
  return res.data;
};
