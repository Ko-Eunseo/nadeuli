import { getArea } from "@/api/getArea";
import { AreaBasedParams } from "@/types/apiParams";
import { useQuery } from "@tanstack/react-query";

const useArea = ({ contentTypeId, areaCode }: Partial<AreaBasedParams>) => {
  return useQuery({
    queryKey: [
      "/areaCode1",
      {
        contentTypeId,
        areaCode,
      },
    ],
    queryFn: () =>
      getArea({
        contentTypeId,
        areaCode,
      }),
  });
};

export default useArea;
