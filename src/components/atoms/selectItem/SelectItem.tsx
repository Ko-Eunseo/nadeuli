import StyledSelectItem from "./styledSelectItem";
import { OptionhandlerParam } from "@/hooks/useSelect";

interface SelectItemProps {
  option: string;
  handleSelectChange: ({ id, selectedValue, code }: OptionhandlerParam) => void;
  label: string;
  code: string;
}
const SelectItem = ({
  option,
  handleSelectChange,
  label,
  code,
  ...rest
}: SelectItemProps) => {
  const handleClick = () => {
    handleSelectChange({ id: label, selectedValue: option, code });
  };

  return (
    <StyledSelectItem value={option} onClick={handleClick} {...rest}>
      {option}
    </StyledSelectItem>
  );
};

export default SelectItem;
