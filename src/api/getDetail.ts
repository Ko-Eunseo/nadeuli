import { DetailInfoParams } from "@/types/apiParams";
import { getURL } from "@/utills/getUrl";
import axios from "axios";

// detail - service, contentTypeId, contentId: required

export const getDetail = async ({
  service,
  contentTypeId,
  contentId,
}: DetailInfoParams) => {
  const res = await axios.get(
    getURL({
      service,
      contentTypeId,
      contentId,
    })
  );
  return res.data;
};
