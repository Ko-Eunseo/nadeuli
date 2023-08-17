import { Selected } from "@/recoil/atoms/selectState";

export const getValueFromArr = (
  arr: Selected[],
  id: string,
  getValue?: boolean //for get value
) => {
  const targetObject = arr.find((item) => item.id === id);
  if (targetObject && getValue) {
    return targetObject.value;
  }
  return targetObject ? targetObject.code : "";
};
