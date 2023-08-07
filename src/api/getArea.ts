import { AreaBasedParams } from "@/types/apiParams";
import { getURL } from "@/utills/getUrl";
import axios from "axios";

export const getArea = async ({
  contentTypeId,
  areaCode,
}: Partial<AreaBasedParams>) => {
  const res = await axios.get(
    getURL({
      service: "/areaCode1",
      contentTypeId,
      areaCode,
    })
  );
  return res.data;
};
