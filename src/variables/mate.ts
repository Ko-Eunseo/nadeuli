import { Endpoint } from "@/types/endPoint";

interface Mate {
  id: Endpoint["endpoint"];
  name: string;
}

const normal: Mate = {
  id: "/KorService1",
  name: "가족",
};

const kid: Mate = {
  id: "/KorWithService1",
  name: "무장애",
};

export const mates = [
  normal,
  kid,
  // pet
];

export const courseMates = [
  {
    code: "C0112",
    name: "가족과",
  },
  {
    code: "C0113",
    name: "혼자서",
  },
];
