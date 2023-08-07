// 서비스분류코드조회
// endpoint: /categoryCode1

interface Nature {
  name: "자연";
  code: "A01";
}
interface Humanities {
  name: "인문";
  code: "A02";
}
interface Leisure {
  name: "레포츠";
  code: "A03";
}
interface Shopping {
  name: "쇼핑";
  code: "A04";
}
interface Food {
  name: "음식";
  code: "A05";
}

interface House {
  name: "숙박";
  code: "B02";
}
interface Course {
  name: "추천코스";
  code: "C01";
}

type Categories =
  | Nature
  | Humanities
  | Leisure
  | Shopping
  | Food
  | House
  | Course;

export interface Category {
  code: Categories["code"];
  name: Categories["name"];
  rnum: number;
}
