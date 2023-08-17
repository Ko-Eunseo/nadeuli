import { Endpoint } from "@/types/endPoint";

interface Mate {
  id: Endpoint["endpoint"];
  name: string;
}

const normal: Mate = {
  id: "/KorService1",
  name: "친구, 부모님",
};

const kid: Mate = {
  id: "/KorWithService1",
  name: "영유아, 장애",
};

// const pet: Mate = {
//   id: "/KorService1",
//   name: "반려동물",
// };

export const mates = [
  normal,
  kid,
  // pet
];

// pet은 true:contentId 필요, false밖에 못받음.
