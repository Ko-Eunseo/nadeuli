"use client";
import CustomSelect from "../organisms/selectForm/CustomSelect";
import useCategory from "@/hooks/useCategory";

const Select = () => {
  const { data, isLoading } = useCategory();

  if (isLoading) return <div>Loading</div>;

  const categories = data?.response?.body?.items?.item || [];

  return (
    <div>
      <CustomSelect label={"what"} optionList={categories} />
    </div>
  );
};

export default Select;
