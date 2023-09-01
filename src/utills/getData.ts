import { DataStructure } from "@/types/type";

export const getData = (data: DataStructure) => {
  const itemList = data?.response?.body?.items?.item || [];
  const totalItemNo = data?.response?.body?.totalCount || 1;

  return { itemList, totalItemNo };
};
