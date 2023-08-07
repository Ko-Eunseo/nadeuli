"use client";
import React from "react";
import { useRecoilState } from "recoil";
import { Selected, selectState } from "@/recoil/atoms/selectState";
import CustomSelect from "./organisms/selectForm/CustomSelect";
import useArea from "@/hooks/useArea";
import CardList from "./organisms/card/CardList";
import { contentTypes } from "@/variables/contentType";

const Main = () => {
  const [selection] = useRecoilState<Selected[]>(selectState);

  const { data: location, isLoading: locationIsLoading } = useArea({});

  if (locationIsLoading) return <div>Loading</div>;

  const locations = location?.response?.body?.items?.item || [];

  return (
    <div>
      <CustomSelect label="where" optionList={locations} />
      <CustomSelect label="what" optionList={contentTypes} />
      <CardList selection={selection} />
    </div>
  );
};

export default Main;
