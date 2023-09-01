import { LocationParams } from "@/types/apiParams";
import getConfirm from "./getConfirm";

const getLocation = (): Promise<Pick<LocationParams, "mapX" | "mapY">> => {
  return new Promise((resolve, rej) => {
    const curPosition = (pos: GeolocationPosition) => {
      resolve({ mapX: pos.coords.longitude, mapY: pos.coords.latitude });
    };

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        curPosition(pos);
      },
      (err) => {
        getConfirm(
          curPosition,
          "위치 정보를 가져오는 데 실패했습니다. 다시시도하시겠습니까?"
        );
        console.error(err);
        rej("위치 정보를 가져오는 데 실패했습니다.");
      }
    );
  });
};

export default getLocation;
