"use client";

import React from "react";
import useArea from "@/hooks/useArea";
import { contentTypes } from "@/variables/contentType";
import { mates } from "@/variables/mate";
import CustomSelect from "../../organisms/selectForm/CustomSelect";
import { Box, CenterBox } from "../../atoms/styles";
import { Arrow, SelectBox, SelectComment } from "../styles";
import CustomTags from "./CustomTags";
import { BsFillTriangleFill } from "react-icons/bs";
import { IconContext } from "react-icons";
import useDrag from "@/hooks/useDrag";
import Button from "@/components/atoms/buttons/basicBtn/Button";
import { colors } from "@/styles/colors";

const CustomSelectBox = ({
  setisSelect,
}: {
  setisSelect: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { data: location, isLoading: locationIsLoading } = useArea({});
  const { handleDrop, handleDragOver } = useDrag();

  const locations = location?.response?.body?.items?.item || [];

  const getSelectTour = () => {
    setisSelect(true);
  };

  return (
    <>
      <SelectBox>
        <SelectComment>나는</SelectComment>
        <Box onDrop={handleDrop} onDragOver={handleDragOver}>
          <CustomSelect label="who" kLabel="누구와" optionList={mates} />
          <CustomSelect label="where" kLabel="어디서" optionList={locations} />
          <CustomSelect label="what" kLabel="어떤" optionList={contentTypes} />
        </Box>
        <SelectComment>여행을 할 거예요!</SelectComment>
      </SelectBox>

      <CustomTags
        locations={locations}
        contentTypes={contentTypes}
        mates={mates}
      />
      <CenterBox>
        <Button bg="red" label="Go!" onClick={getSelectTour} />
      </CenterBox>
      <Arrow>
        <IconContext.Provider
          value={{ color: `${colors.background}`, size: "3rem" }}
        >
          <BsFillTriangleFill />
        </IconContext.Provider>
      </Arrow>
    </>
  );
};

export default CustomSelectBox;
