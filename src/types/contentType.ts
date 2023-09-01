interface TourSpot {
  id: 12;
  name: "관광지";
}

interface CulFacility {
  id: 14;
  name: "문화시설";
}

interface Festival {
  id: 15;
  name: "축제공연행사";
}

export interface TourCourse {
  id: 25;
  name: "여행코스";
}
interface Leisure {
  id: 28;
  name: "레포츠";
}
interface House {
  id: 32;
  name: "숙박";
}
interface Shopping {
  id: 38;
  name: "쇼핑";
}
interface Restaurant {
  id: 39;
  name: "음식점";
}

type ContentTypes =
  | TourSpot
  | CulFacility
  | Festival
  | TourCourse
  | Leisure
  | House
  | Shopping
  | Restaurant;

export interface ContentType {
  id: ContentTypes["id"];
  name: ContentTypes["name"];
}
