import { URL_TYPE } from "@/types/apiParams";

// 파라미터가 들어왔는지 검사
export const isDefined = (param: any): boolean => typeof param !== "undefined";

// 구조분해할당
export const destructureParams = <T extends Omit<T, "service">>(
  param: T
): T => {
  const result: Partial<T> = {};
  for (const key in param) {
    if (Object.prototype.hasOwnProperty.call(param, key)) {
      const value = (param as any)[key];
      if (isDefined(value)) {
        result[key] = value;
      }
    }
  }
  return result as T;
};
