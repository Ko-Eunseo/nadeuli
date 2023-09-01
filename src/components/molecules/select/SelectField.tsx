import SelectItem from "@/components/atoms/selectItem/SelectItem";
import { Label, StyledSelect } from "./styledSelect";
import { OptionhandlerParam, TagType } from "@/types/type";
import { Selected } from "@/recoil/atoms/selectState";

interface SelectFieldProps {
  options: TagType[];
  label: string;
  kLabel: string;
  isOpen: boolean;
  selection: Selected[];
  handleSelectChange: ({ id, selectedValue, code }: OptionhandlerParam) => void;
}

const SelectField = ({
  label,
  kLabel,
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
        {selectedValue ? (
          <SelectItem
            option={selectionOption.value}
            handleSelectChange={handleSelectChange}
            label={label}
            code={
              (selectionOption.code as string) || String(selectionOption.id)
            }
          />
        ) : (
          <SelectItem
            option={kLabel}
            handleSelectChange={handleSelectChange}
            label={label}
            code={label}
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
                code={(option?.code as string) || String(option?.id)}
                {...rest}
              />
            );
          })}
      </StyledSelect>
    </>
  );
};

export default SelectField;
