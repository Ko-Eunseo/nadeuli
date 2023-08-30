import { atom } from "recoil";

export interface ModalType {
  isOpen: boolean;
  contentId: string;
  contentTypeId: string;
}
export const modalState = atom<ModalType>({
  key: "modalState",
  default: {
    isOpen: false,
    contentId: "",
    contentTypeId: "",
  },
});
