import useCurPosition from "./useCurPosition";
import { useLocationTour } from "./useTourInfo";
import { Endpoint } from "@/types/endPoint";
import { getValueFromArr } from "@/utills/getValWithId";
import { Selected } from "@/recoil/atoms/selectState";
import { useRecoilState } from "recoil";
import { selectOptionSelector } from "@/recoil/selectors/selectOptionSelector";

const useCurTour = () => {
  const [selection] = useRecoilState<Selected[]>(selectOptionSelector);
  const endpoint = getValueFromArr(selection, "who") as Endpoint["endpoint"];
  const { position, refetch } = useCurPosition();

  const refethPosition = async () => {
    await refetch();
  };

  const { data, isLoading } = useLocationTour({
    endpoint,
    mapX: position?.mapX,
    mapY: position?.mapY,
  });
  const courseData = data?.response?.body?.items?.item || [];
  const curAreaCode = courseData[0]?.areacode;

  return { courseData, curAreaCode, refethPosition };
};

export default useCurTour;
