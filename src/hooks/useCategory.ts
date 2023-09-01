import { getCategory } from "@/api/getCategory";
import { useQuery } from "@tanstack/react-query";

// 서비스분류코드목록을 대,중,소분류로 조회하는 기능
const useCategory = () => {
  return useQuery({
    queryKey: ["/categoryCode1"],
    queryFn: () => getCategory(),
  });
};

export default useCategory;
