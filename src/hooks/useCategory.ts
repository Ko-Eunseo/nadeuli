import { getCategory } from "@/api/getCategory";
import { useQuery } from "@tanstack/react-query";

const useCategory = () => {
  return useQuery({
    queryKey: ["category"],
    queryFn: () => getCategory(),
  });
};

export default useCategory;
