import { Selected } from "@/recoil/atoms/selectState";

export const getValueFromArr = (arr: Selected[], id: string) => {
  const targetObject = arr.find((item) => item.id === id);
  return targetObject ? targetObject.code : "";
};
