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
  handleSelectChange: ({ id, selectedValue, code }: OptionhandlerParam) => void;
}

const SelectField = ({
  label,
  options,
  isOpen = false,
  selection,
  handleSelectChange,
  ...rest
}: SelectFieldProps) => {
  const selectionOption = selection.find((selected) => selected.id === label);
  const selectedValue = selectionOption?.value;

  return (
    <>
      <Label>{label}</Label>
      <StyledSelect overflow={isOpen ? "visible" : "hidden"}>
        {selectedValue && (
          <SelectItem
            option={selectionOption.value}
            handleSelectChange={handleSelectChange}
            label={label}
            code={
              selectionOption.code !== undefined
                ? (selectionOption.code as string)
                : String(selectionOption.id)
            }
          />
        )}
        {options &&
          options.map((option: TagType, i) => {
            return (
              <SelectItem
                key={i}
                option={option.name}
                handleSelectChange={handleSelectChange}
                label={label}
                code={
                  option.code !== undefined
                    ? (option.code as string)
                    : String(option.id)
                }
                {...rest}
              />
            );
          })}
      </StyledSelect>
    </>
  );
};

export default SelectField;
