import SelectField from "@/components/molecules/select/SelectField";
import { BiSolidDownArrow } from "react-icons/bi";
import { StyledCustomSelect, SelectIcon } from "./styledCustomSelect";
import useSelect from "@/hooks/useSelect";
import { TagType } from "@/types/type";

interface SelectOptios {
  optionList: TagType[];
  label: string;
}

const CustomSelect = ({ optionList, label }: SelectOptios) => {
  const { isOpen, openOptions, selection, handleSelectChange } = useSelect();

  return (
    <StyledCustomSelect>
      <div
        style={{ display: "flex", alignItems: "center" }}
        onClick={openOptions}
      >
        <SelectIcon>
          <BiSolidDownArrow />
        </SelectIcon>
        <SelectField
          label={label}
          options={optionList}
          isOpen={isOpen}
          selection={selection}
          handleSelectChange={handleSelectChange}
        />
      </div>
    </StyledCustomSelect>
  );
};

export default CustomSelect;
