"use client";

import React from "react";
import { useRecoilState } from "recoil";
import { Selected } from "@/recoil/atoms/selectState";
import CardList from "../organisms/card/CardList";
import { CardWrapper } from "../molecules/card/styledCard";
import { selectOptionSelector } from "@/recoil/selectors/selectOptionSelector";

const CustomSection = ({ isSelect }: { isSelect: boolean }) => {
  const [selection] = useRecoilState<Selected[]>(selectOptionSelector);

  return (
    <CardWrapper>
      <CardList selection={isSelect ? selection : []} />
    </CardWrapper>
  );
};

export default CustomSection;
