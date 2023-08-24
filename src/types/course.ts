// https://apis.data.go.kr/B551011/KorService1/
// categoryCode1
// ?numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=Test
// &contentTypeId=25
// &cat1=C01
// &_type=json
// &serviceKey=
// /categoryCode1

interface FamilyCourse {
  code: "C0112";
  name: "가족여행";
}
interface SingleCourse {
  code: "C0113";
  name: "혼자여행";
}

export type CourseMates = FamilyCourse | SingleCourse;

interface HealCourse {
  code: "C0114";
  name: "힐링코스";
}
interface WalkCourse {
  code: "C0115";
  name: "도보코스";
}
interface CampCourse {
  code: "C0116";
  name: "캠핑코스";
}
interface FoodCourse {
  code: "C0117";
  name: "맛코스";
}

export interface Cat1 {
  code: "C01";
  name: "추천코스";
}

export type Cat2 =
  | CourseMates
  | HealCourse
  | WalkCourse
  | CampCourse
  | FoodCourse;
