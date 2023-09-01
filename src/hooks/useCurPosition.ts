import { LocationParams } from "@/types/apiParams";
import getLocation from "@/utills/getLocation";
import { useQuery } from "@tanstack/react-query";

const useCurPosition = () => {
  const { data, refetch } = useQuery<Pick<LocationParams, "mapX" | "mapY">>(
    ["curPosition"],
    getLocation,
    {
      enabled: false,
    }
  );

  return { position: data, refetch };
};

export default useCurPosition;
