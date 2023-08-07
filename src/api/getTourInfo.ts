import { getURL } from "@/utills/getUrl";
import axios from "axios";

export const getTourInfo = async (service: string) => {
  const res = await axios.get(getURL({ service }));
  return res.data;
};
