"use client";

import React from "react";
import { useRecoilState } from "recoil";
import { Selected, selectState } from "@/recoil/atoms/selectState";
import CardList from "../organisms/card/CardList";

const CustomSection = ({ isSelect }: { isSelect: boolean }) => {
  const [selection] = useRecoilState<Selected[]>(selectState);

  return (
    <section>
      <CardList selection={isSelect ? selection : []} />
    </section>
  );
};

export default CustomSection;
