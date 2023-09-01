"use client";

import React from "react";
import { useRecoilState } from "recoil";
import { Selected } from "@/recoil/atoms/selectState";
import CardList from "../organisms/card/CardList";
import { CardWrapper } from "../molecules/card/styledCard";
import { selectOptionSelector } from "@/recoil/selectors/selectOptionSelector";
import Title from "../molecules/title/Title";
import { CenterBox } from "../atoms/styles";

const CustomSection = ({ isSelect }: { isSelect: boolean }) => {
  const [selection] = useRecoilState<Selected[]>(selectOptionSelector);

  return (
    <>
      <CenterBox>
        {isSelect ? (
          selection?.map((tag, i) => (
            <Title key={i} type="main" text={`#${tag.value}`} />
          ))
        ) : (
          <Title type="main" text="내 여행 테마는?" />
        )}
      </CenterBox>
      <CardWrapper>
        <CardList selection={isSelect ? selection : []} />
      </CardWrapper>
    </>
  );
};

export default CustomSection;
