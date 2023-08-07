import { SearchKeywordParams, SearchFestivalParams } from "@/types/apiParams";
import { getURL } from "@/utills/getUrl";
import axios from "axios";

export const getInfoByKeyword = async ({
  service,
  contentTypeId,
  keyword,
}: SearchKeywordParams) => {
  const res = await axios.get(
    getURL({
      service,
      contentTypeId,
      keyword,
    })
  );
  return res.data;
};

export const getFestival = async ({
  areaCode,
  eventStartDate,
}: SearchFestivalParams) => {
  const res = await axios.get(
    getURL({
      service: "/searchFestival1",
      areaCode,
      eventStartDate,
    })
  );
  return res.data;
};
