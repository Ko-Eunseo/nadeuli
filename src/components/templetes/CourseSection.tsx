import { cat2 } from "@/variables/courseCategory";
import { Selected, selectState } from "@/recoil/atoms/selectState";
import { Area } from "@/types/area";
import { getValueFromArr } from "@/utills/getValWithId";
import { useRecoilState } from "recoil";
import Tab from "../organisms/tab/Tab";

const CourseSection = () => {
  const [selection] = useRecoilState<Selected[]>(selectState);
  const areaCode = getValueFromArr(selection, "where") as Area["code"];

  return (
    <section>
      <Tab areaCode={areaCode} tabList={cat2} />
    </section>
  );
};

export default CourseSection;
