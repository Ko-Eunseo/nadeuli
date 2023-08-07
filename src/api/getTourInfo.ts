import { AreaBasedParams } from "@/types/apiParams";
import { getURL } from "@/utills/getUrl";
import axios from "axios";

export const getTourInfo = async ({
  service,
  areaCode,
  contentTypeId,
}: AreaBasedParams) => {
  const res = await axios.get(getURL({ service, areaCode, contentTypeId }));
  return res.data;
};
