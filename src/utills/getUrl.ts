import { URL_TYPE } from "@/types/apiParams";
import { createQueryString } from "@/utills/createQueryString";
import { BASIC_PARAMS, BASIC_URL } from "@/variables/config";
import { destructureParams } from "./destructureParams";

export const getURL = <T extends URL_TYPE>(params: T) => {
  const { service, endpoint, ...rest } = params;
  const ENDPOINT = endpoint || "/KorService1";

  const PARAMS: Record<string, any> = destructureParams(rest);
  const URL =
    BASIC_URL +
    ENDPOINT +
    service +
    "?" +
    createQueryString(PARAMS) +
    "&" +
    createQueryString(BASIC_PARAMS);
  return URL;
};
