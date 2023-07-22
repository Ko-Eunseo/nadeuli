import { Selected } from "@/recoil/atoms/selectState";
import StyledSelectItem from "./styledSelectItem";
import { OptionhandlerParam } from "@/hooks/useSelect";

interface SelectItemProps {
  option: string;
  handleSelectChange: ({ label, selectedValue }: OptionhandlerParam) => void;
  label: string;
}
const SelectItem = ({
  option,
  handleSelectChange,
  label,
  ...rest
}: SelectItemProps) => {
  const handleClick = () => {
    handleSelectChange({ label, selectedValue: option });
  };

  return (
    <StyledSelectItem value={option} onClick={handleClick} {...rest}>
      {option}
    </StyledSelectItem>
  );
};

export default SelectItem;
