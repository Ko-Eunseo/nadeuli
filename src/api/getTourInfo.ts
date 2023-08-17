import { AreaBasedParams } from "@/types/apiParams";
import { getURL } from "@/utills/getUrl";
import axios from "axios";

export const getTourInfo = async ({
  endpoint,
  service,
  areaCode,
  contentTypeId,
}: AreaBasedParams) => {
  const res = await axios.get(
    getURL({
      endpoint,
      service,
      areaCode,
      contentTypeId,
    })
  );
  return res.data;
};
