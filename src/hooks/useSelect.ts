import { Selected, selectState } from "@/recoil/atoms/selectState";
import { useState } from "react";
import { useRecoilState } from "recoil";

export interface OptionhandlerParam {
  id: string;
  selectedValue: string;
  code: number | string;
}
interface UseSelect {
  isOpen: boolean;
  openOptions: () => void;
  selection: Selected[];
  handleSelectChange: ({ id, selectedValue, code }: OptionhandlerParam) => void;
}
const useSelect = (): UseSelect => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const openOptions = () => {
    setIsOpen(!isOpen);
  };

  const [selection, setSelection] = useRecoilState<Selected[]>(selectState);
  const handleSelectChange = ({
    id,
    selectedValue,
    code,
  }: OptionhandlerParam) => {
    setSelection((prevSelected) => {
      const labelIndex = prevSelected.findIndex((item) => item.id === id);
      if (labelIndex >= 0) {
        // 레이블이 이미 존재: 해당 레이블의 선택된 값만 업데이트
        const updatedSelected = [...prevSelected];
        updatedSelected[labelIndex] = {
          ...prevSelected[labelIndex],
          value: selectedValue,
          code,
        };
        return updatedSelected;
      } else {
        // 레이블이 존재하지 않는 경우: 새로운 객체를 배열에 추가
        return [...prevSelected, { id, value: selectedValue, code }];
      }
    });
  };

  return { isOpen, openOptions, selection, handleSelectChange };
};

export default useSelect;
