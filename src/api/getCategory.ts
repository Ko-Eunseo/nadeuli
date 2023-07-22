import { createQueryString } from "@/utills/createQueryString";
import { BASIC_PARAMS, BASIC_URL } from "@/variables/config";
import axios from "axios";

// 서비스분류코드조회
// endpoint: /categoryCode1

export const getCategory = async () => {
  const ENDPOINT = "/categoryCode1";
  const URL = BASIC_URL + ENDPOINT + "?" + createQueryString(BASIC_PARAMS);
  console.log(URL);
  const res = await axios.get(URL);
  return res.data;
};
