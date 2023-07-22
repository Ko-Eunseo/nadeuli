import SelectItem from "@/components/atoms/selectItem/SelectItem";
import { Label, StyledSelect } from "./styledSelect";
import { TagType } from "@/types/type";
import { Selected } from "@/recoil/atoms/selectState";
import { OptionhandlerParam } from "@/hooks/useSelect";

interface SelectFieldProps {
  options: TagType[];
  label: string;
  isOpen: boolean;
  selection: Selected[];
  handleSelectChange: ({ label, selectedValue }: OptionhandlerParam) => void;
}

const SelectField = ({
  label,
  options,
  isOpen = false,
  selection,
  handleSelectChange,
  ...rest
}: SelectFieldProps) => {
  const selectedValue = selection.find(
    (selected) => selected[label] !== undefined
  )?.[label];

  return (
    <>
      <Label>{label}</Label>
      <StyledSelect overflow={isOpen ? "visible" : "hidden"}>
        {selectedValue && (
          <SelectItem
            option={selectedValue}
            handleSelectChange={handleSelectChange}
            label={label}
          />
        )}
        {options.map((option: TagType, i) => {
          return (
            <SelectItem
              key={option?.id || option?.code}
              option={option?.name}
              handleSelectChange={handleSelectChange}
              label={label}
              {...rest}
            />
          );
        })}
      </StyledSelect>
    </>
  );
};

export default SelectField;
