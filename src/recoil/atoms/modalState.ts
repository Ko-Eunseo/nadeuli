import { ContentType } from "@/types/contentType";
import { atom } from "recoil";

export interface ModalType {
  isOpen: boolean;
  contentId: string;
  contentTypeId?: ContentType["id"];
}
export const modalState = atom<ModalType>({
  key: "modalState",
  default: {
    isOpen: false,
    contentId: "",
    contentTypeId: undefined,
  },
});
