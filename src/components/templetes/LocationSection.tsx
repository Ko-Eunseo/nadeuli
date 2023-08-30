"use client";

import React from "react";
import Char from "../atoms/texts/Character";
import CardController from "../organisms/card/CardController";
import { HorizontalCardList, OverFlowHidden } from "../organisms/card/styled";
import GeolocationBtn from "../molecules/button/GeolocationBtn";
import useCurTour from "@/hooks/useCurTour";
import getConfirm from "@/utills/getConfirm";
import { useRecoilState } from "recoil";
import { Area } from "@/types/area";
import { areaSelector } from "@/recoil/selectors/areaSelector";

const LocationSection = () => {
  const { courseData, curAreaCode, refethPosition } = useCurTour();
  const [areas] = useRecoilState<Area[]>(areaSelector);

  const curAreaName = areas?.find((el: { code: Area["code"] }) => {
    return el.code === curAreaCode;
  })?.name;

  const clickLocationBtn = () => {
    getConfirm(
      refethPosition,
      "유저 위치를 공유하겠습니까? 위치기반 여행코스를 제공합니다."
    );
  };

  return (
    <OverFlowHidden>
      <Char size="md" weight="bold">
        {curAreaName}에서 하는 여행코스
        <GeolocationBtn onClick={clickLocationBtn} />
      </Char>
      <HorizontalCardList>
        <CardController cardData={courseData} />
        {courseData.length === 0 && (
          <Char size="sm" weight="mid">
            현재 해당 위치의 여행코스 데이터가 없습니다.
          </Char>
        )}
      </HorizontalCardList>
    </OverFlowHidden>
  );
};

export default LocationSection;
