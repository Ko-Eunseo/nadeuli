import { Selected, selectState } from "@/recoil/atoms/selectState";
import { Area } from "@/types/area";
import { getValueFromArr } from "@/utills/getValWithId";
import { useRecoilState } from "recoil";
import Tab from "../organisms/tab/Tab";
import { icons } from "@/variables/icons";
import useTab from "@/hooks/useTab";
import useCategory from "@/hooks/useCategory";

const CourseSection = () => {
  const [selection] = useRecoilState<Selected[]>(selectState);
  const areaCode = getValueFromArr(selection, "where") as Area["code"];

  const { tabState, tabList } = useTab(useCategory, icons);

  return (
    <>
      <Tab areaCode={areaCode} tabList={tabList} tabState={tabState} />
    </>
  );
};

export default CourseSection;
