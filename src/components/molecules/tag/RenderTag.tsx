import Tag from "@/components/atoms/tags/Tag";
import { TagType } from "@/types/type";
import { colors } from "@/styles/colors";
import useSelect from "@/hooks/useSelect";
import { SelectTag } from "./styles";

interface SelectTag {
  label: string;
  name: TagType["name"];
  code: TagType["code"];
  bg: keyof typeof colors;
}

const SelectTagItem = ({ label, name, code = "", bg }: SelectTag) => {
  const { handleSelectChange } = useSelect();
  const handleClick = () => {
    handleSelectChange({ id: label, selectedValue: name, code });
  };

  return (
    <>
      <SelectTag draggable>
        <Tag name={name} bg={bg} onClick={handleClick} />
      </SelectTag>
    </>
  );
};

export default SelectTagItem;
