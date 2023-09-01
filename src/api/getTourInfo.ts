import { AreaBasedCourseParams, AreaBasedParams } from "@/types/apiParams";
import { getURL } from "@/utills/getUrl";
import axios from "axios";

export const getTourInfo = async ({
  endpoint,
  service,
  areaCode,
  contentTypeId,
  pageNo,
}: AreaBasedParams & { pageNo?: number }) => {
  const res = await axios.get(
    getURL({
      endpoint,
      service,
      areaCode,
      contentTypeId,
      pageNo,
    })
  );
  return res.data;
};

export const getCourseTourInfo = async ({
  service,
  areaCode,
  cat2,
  pageNo,
}: AreaBasedCourseParams & { pageNo: number }) => {
  const res = await axios.get(
    getURL({
      endpoint: "/KorService1",
      service: "/areaBasedList1",
      areaCode,
      contentTypeId: 25,
      cat1: "C01",
      cat2,
      pageNo,
    })
  );
  return res.data;
};
