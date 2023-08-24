import { Cat2 } from "@/types/course";

export const cat1 = [
  {
    code: "C01",
    name: "추천코스",
  },
];

export type Cat2List = (Cat2 & { label: string })[];

export const cat2: Cat2List = [
  {
    code: "C0112",
    name: "가족여행",
    label: "가족과 함께",
  },
  {
    code: "C0113",
    label: "혼자 떠나는 여행",
    name: "혼자여행",
  },
  {
    code: "C0114",
    label: "지친 당신, 힐링하라",
    name: "힐링코스",
  },
  {
    code: "C0115",
    label: "뚜벅뚜벅 걸어서 하는 여행",
    name: "도보코스",
  },
  {
    code: "C0116",
    label: "캠퍼 모여라!",
    name: "캠핑코스",
  },
  {
    code: "C0117",
    label: "식도락 여행",
    name: "맛코스",
  },
];

export interface CourseCategory {
  rnum: number;
  code: Cat2["code"];
  name: Cat2["name"];
}
