// https://apis.data.go.kr/B551011/KorService1/areaCode1?MobileOS=WIN&MobileApp=nadeuli&_type=json&serviceKey=p8RnXa51JZxmO1Xsj2aEM92oClUs4SJn4BTL%2F472vCt6iWkMueOSir8KMeh%2BGOthLGbIS7s%2F3eLI0ngArs16mg%3D%3D
// 지역코드조회: 지역코드목록을 지역,시군구,읍면동 코드목록을 조회하는 기능
// endpoint: /areaCode1
interface Seoul {
  code: "1";
  name: "서울";
}
interface Incheon {
  code: "2";
  name: "인천";
}

interface Daejeon {
  code: "3";
  name: "대전";
}
interface Daegu {
  code: "4";
  name: "대구";
}
interface Gwangju {
  code: "5";
  name: "광주";
}
interface Busan {
  code: "6";
  name: "부산";
}
interface Ulsan {
  code: "7";
  name: "울산";
}
interface Sejong {
  code: "8";
  name: "세종특별자치시";
}
interface Gyeonggi {
  code: "31";
  name: "경기도";
}
interface Gangwon {
  code: "32";
  name: "강원특별자치도";
}
type Areas =
  | Seoul
  | Incheon
  | Daejeon
  | Daegu
  | Gwangju
  | Busan
  | Ulsan
  | Sejong
  | Gyeonggi
  | Gangwon;

export interface Area {
  rnum: number;
  code: Areas["code"];
  name: Areas["name"];
}
