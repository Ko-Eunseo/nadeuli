"use client";

import React from "react";
import { useRecoilState } from "recoil";
import { Selected, selectState } from "@/recoil/atoms/selectState";
import CardList from "../organisms/card/CardList";
import { CardWrapper } from "../molecules/card/styledCard";

const CustomSection = ({ isSelect }: { isSelect: boolean }) => {
  const [selection] = useRecoilState<Selected[]>(selectState);

  return (
    <CardWrapper>
      <CardList selection={isSelect ? selection : []} />
    </CardWrapper>
  );
};

export default CustomSection;
