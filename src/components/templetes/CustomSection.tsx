"use client";

import React from "react";
import { useRecoilState } from "recoil";
import { Selected, selectState } from "@/recoil/atoms/selectState";
import useArea from "@/hooks/useArea";
import CardList from "../organisms/card/CardList";
import { contentTypes } from "@/variables/contentType";
import { mates } from "@/variables/mate";
import CustomSelect from "../organisms/selectForm/CustomSelect";
import Char from "../atoms/texts/Character";

const CustomSection = () => {
  const [selection] = useRecoilState<Selected[]>(selectState);
  const { data: location, isLoading: locationIsLoading } = useArea({});

  const locations = location?.response?.body?.items?.item || [];
  return (
    <section>
      <Char size="md" weight="bold">
        나는
        <CustomSelect label="who" optionList={mates} />
        와 함께
        <CustomSelect label="where" optionList={locations} />
        에서
        <CustomSelect label="what" optionList={contentTypes} />
        여행을 할거예요
      </Char>
      <CardList selection={selection} />
    </section>
  );
};

export default CustomSection;
