import { getURL } from "@/utills/getUrl";
import axios from "axios";

// 서비스분류코드조회: 여행코스
export const getCategory = async () => {
  const param = {
    service: "/categoryCode1",
    cat1: "C01",
  };
  const res = await axios.get(getURL(param));
  return res.data;
};
