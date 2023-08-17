import { getDetail } from "@/api/getDetail";
import { getLocationTour } from "@/api/getLocationT";
import { getFestival } from "@/api/getSearch";
import { getTourInfo } from "@/api/getTourInfo";
import {
  AreaBasedParams,
  DetailInfoParams,
  LocationParams,
  SearchFestivalParams,
} from "@/types/apiParams";
import { useQuery } from "@tanstack/react-query";

export const useAreaBasedTourInfo = ({
  endpoint,
  areaCode,
  contentTypeId,
}: Partial<AreaBasedParams>) => {
  const params = {
    service: "/areaBasedList1",
    areaCode,
    contentTypeId,
    endpoint,
  };
  return useQuery({
    queryKey: ["/areaBasedList1"],
    queryFn: () => getTourInfo(params),
  });
};

export const useFestivalInfo = ({
  endpoint,
  eventStartDate,
  areaCode,
}: Partial<SearchFestivalParams>) => {
  const params = {
    service: "/searchFestival1",
    eventStartDate: eventStartDate as string,
    areaCode,
    endpoint,
  };
  return useQuery({
    queryKey: [params.service, params],
    queryFn: () => getFestival(params),
  });
};
export const usePetTourInfo = ({
  endpoint,
  contentId,
}: Partial<DetailInfoParams>) => {
  const params = {
    service: "/detailPetTour1",
    contentId,
    endpoint,
  };
  return useQuery({
    queryKey: [params.service, { contentId }],
    queryFn: () => getTourInfo(params),
  });
};

export const useContentDetailInfo = ({
  endpoint,
  service,
  contentId,
  contentTypeId,
}: DetailInfoParams) => {
  const params = {
    service,
    contentId,
    contentTypeId,
    endpoint,
  };
  return useQuery({
    queryKey: [params.service, { contentId, contentTypeId }],
    queryFn: () => getDetail(params),
  });
};

export const useImageInfo = ({
  endpoint,
  contentId,
}: Partial<DetailInfoParams>) => {
  const params = {
    service: "/detailImage1",
    contentId,
    endpoint,
  };
  return useQuery({
    queryKey: [params.service, { contentId }],
    queryFn: () => getDetail(params),
  });
};

export const useDetailInfo = ({
  endpoint,
  contentId,
}: Partial<DetailInfoParams>) => {
  const params = {
    service: "/detailInfo1",
    contentId,
    endpoint,
  };
  return useQuery({
    queryKey: [params.service, { contentId }],
    queryFn: () => getDetail(params),
  });
};

export const useLocationTour = ({ mapX, mapY }: Partial<LocationParams>) => {
  const params = {
    service: "/locationBasedList1",
    mapX: mapX || 126.9779692,
    mapY: mapY || 37.566535,
  };

  return useQuery({
    queryKey: [params.service, { mapX, mapY }],
    queryFn: () => getLocationTour(params),
  });
};
