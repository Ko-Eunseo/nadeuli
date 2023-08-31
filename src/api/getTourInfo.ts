import { AreaBasedCourseParams, AreaBasedParams } from "@/types/apiParams";
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

export const getCourseTourInfo = async ({
  service,
  areaCode,
  cat2,
}: AreaBasedCourseParams) => {
  const res = await axios.get(
    getURL({
      endpoint: "/KorService1",
      service: "/areaBasedList1",
      areaCode,
      contentTypeId: 25,
      cat1: "C01",
      cat2,
    })
  );
  return res.data;
};
