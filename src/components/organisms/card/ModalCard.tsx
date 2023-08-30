import Modal from "@/components/atoms/modal/Modal";
import Overlay from "@/components/atoms/modal/Overlay";
import DetailCard from "@/components/molecules/card/DetailCard";
import useModal from "@/hooks/useModal";
import { modalState } from "@/recoil/atoms/modalState";
import { useEffect } from "react";
import { useRecoilState } from "recoil";

const ModalCard = ({ contentId }: { contentId: string }) => {
  const [modal] = useRecoilState(modalState);
  const { detailInfo } = useModal();

  useEffect(() => {
    // scroll block
    document.body.style.cssText = `
      height: 100%;
      overflow: hidden;
    `;
    return () => {
      document.body.style.cssText = "";
    };
  }, []);

  return (
    <>
      {modal.isOpen && modal.contentId === contentId && (
        <>
          <Modal>
            <DetailCard detailInfo={detailInfo} />
          </Modal>
          <Overlay />
        </>
      )}
    </>
  );
};

export default ModalCard;
