import { useDetailInfo } from "./useTourInfo";
import { useRecoilState } from "recoil";
import { modalState } from "@/recoil/atoms/modalState";
import { ContentType } from "@/types/contentType";

const useModal = () => {
  const [modal, setModal] = useRecoilState(modalState);
  const { data } = useDetailInfo({
    contentId: modal.contentId,
    endpoint: "/KorService1",
  });

  const detailInfo = data?.response?.body?.items?.item?.[0];

  const openModal = ({
    contentId,
    contentTypeId,
  }: {
    contentId: string;
    contentTypeId: ContentType["id"];
  }) => {
    setModal({
      isOpen: true,
      contentId,
      contentTypeId,
    });
  };

  const closeModal = () => {
    setModal({
      isOpen: false,
      contentId: "",
      contentTypeId: undefined,
    });
  };

  return { modal, detailInfo, openModal, closeModal };
};

export default useModal;
