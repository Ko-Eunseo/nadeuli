import { LocationParams } from "@/types/apiParams";
import { getURL } from "@/utills/getUrl";
import axios from "axios";

export const getLocationTour = async ({ mapX, mapY }: LocationParams) => {
  const res = await axios.get(
    getURL({
      endpoint: "/KorService1",
      service: "/locationBasedList1",
      contentTypeId: 25,
      mapX,
      mapY,
      radius: 20000,
    })
  );
  return res.data;
};
