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
    }) +
      "&defaultYN=Y&firstImageYN=Y&areacodeYN=Y&catcodeYN=Y&addrinfoYN=Y&mapinfoYN=Y&overviewYN=Y"
  );
  return res.data;
};

export const getDetailCourse = async ({
  service,
  contentId,
  contentTypeId,
}: Omit<DetailInfoParams, "contentTypeId" | "endpoint"> & {
  contentTypeId: number;
  endpoint: string;
}) => {
  const res = await axios.get(
    getURL({
      service,
      contentTypeId,
      contentId,
    })
  );
  return res.data;
};

export const getInfoWithId = async ({
  contentTypeId,
  contentId,
  service,
}: Pick<DetailInfoParams, "contentId" | "contentTypeId" | "service">) => {
  const res = await axios.get(
    getURL({
      endpoint: "/KorService1",
      service,
      contentTypeId,
      contentId,
    })
  );
  return res.data;
};

export const getBarrierFree = async ({
  contentId,
}: Pick<DetailInfoParams, "contentId">) => {
  const res = await axios.get(
    getURL({
      endpoint: "/KorWithService1",
      contentId,
      service: "/detailWithTour1",
    })
  );
  return res.data;
};
