import { getDetail } from "@/api/getDetail";
import { getFestival } from "@/api/getSearch";
import { getTourInfo } from "@/api/getTourInfo";
import {
  AreaBasedParams,
  DetailInfoParams,
  SearchFestivalParams,
} from "@/types/apiParams";
import { useQuery } from "@tanstack/react-query";

export const useAreaBasedTourInfo = ({
  areaCode,
  contentTypeId,
}: Partial<AreaBasedParams>) => {
  const params = { service: "/areaBasedList1", areaCode, contentTypeId };
  return useQuery({
    queryKey: ["/areaBasedList1"],
    queryFn: () => getTourInfo(params),
  });
};

export const useFestivalInfo = ({
  eventStartDate,
  areaCode,
}: Partial<SearchFestivalParams>) => {
  const params = {
    service: "/searchFestival1",
    eventStartDate: eventStartDate as string,
    areaCode,
  };
  return useQuery({
    queryKey: [params.service, params],
    queryFn: () => getFestival(params),
  });
};
export const usePetTourInfo = ({ contentId }: Partial<DetailInfoParams>) => {
  const params = {
    service: "/detailPetTour1",
    contentId,
  };
  return useQuery({
    queryKey: [params.service, { contentId }],
    queryFn: () => getDetail(params),
  });
};

export const useContentDetailInfo = ({
  service,
  contentId,
  contentTypeId,
}: DetailInfoParams) => {
  const params = {
    service,
    contentId,
    contentTypeId,
  };
  return useQuery({
    queryKey: [params.service, { contentId, contentTypeId }],
    queryFn: () => getDetail(params),
  });
};

export const useImageInfo = ({ contentId }: Partial<DetailInfoParams>) => {
  const params = {
    service: "/detailImage1",
    contentId,
  };
  return useQuery({
    queryKey: [params.service, { contentId }],
    queryFn: () => getDetail(params),
  });
};
