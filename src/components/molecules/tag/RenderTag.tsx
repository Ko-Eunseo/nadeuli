import Tag from "@/components/atoms/tags/Tag";
import { SelectTagType } from "@/types/type";
import useSelect from "@/hooks/useSelect";
import { SelectTag } from "./styles";
import useDrag from "@/hooks/useDrag";

const SelectTagItem = ({ label, name, code = "", bg }: SelectTagType) => {
  const { handleDragStart } = useDrag();

  const { handleSelectChange } = useSelect();
  const selectedVal = { id: label, selectedValue: name, code };
  const handleClick = () => {
    handleSelectChange(selectedVal);
  };

  return (
    <>
      <SelectTag draggable onDragStart={(e) => handleDragStart(e, selectedVal)}>
        <Tag name={name} bg={bg} onClick={handleClick} />
      </SelectTag>
    </>
  );
};

export default SelectTagItem;
