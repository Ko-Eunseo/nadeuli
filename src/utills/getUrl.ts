import { URL_TYPE } from "@/types/apiParams";
import { createQueryString } from "@/utills/createQueryString";
import { BASIC_PARAMS, BASIC_URL } from "@/variables/config";
import { destructureParams } from "./destructureParams";

export const getURL = <T extends URL_TYPE>(params: T) => {
  const { service, ...rest } = params;
  const ENDPOINT = service;

  const PARAMS: Record<string, any> = destructureParams(rest);

  const URL =
    BASIC_URL +
    ENDPOINT +
    "?" +
    createQueryString(PARAMS) +
    "&" +
    createQueryString(BASIC_PARAMS);
  return URL;
};
