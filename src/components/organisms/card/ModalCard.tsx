import GlitchLogo from "@/components/atoms/logo/GlitchLogo";
import Modal from "@/components/atoms/modal/Modal";
import Overlay from "@/components/atoms/modal/Overlay";
import DetailCard from "@/components/molecules/card/DetailCard";
import useModal from "@/hooks/useModal";
import {
  useBarrierFree,
  useDetailCourse,
  usePetTourInfo,
  useUseInfo,
} from "@/hooks/useTourInfo";
import { modalState } from "@/recoil/atoms/modalState";
import { Suspense, useEffect } from "react";
import { useRecoilState } from "recoil";

const ModalCard = ({ contentId }: { contentId: string }) => {
  const [modal] = useRecoilState(modalState);
  const { detailInfo } = useModal();

  const { data: detailCourse } = useDetailCourse({
    contentId: modal.contentId,
  });
  const { data: useInfo } = useUseInfo({
    contentId: modal.contentId,
    contentTypeId: modal.contentTypeId,
  });
  const { data: petInfoData } = usePetTourInfo({
    contentId: modal.contentId,
  });
  const { data: barrierFreeData } = useBarrierFree({
    contentId: modal.contentId,
  });

  const courses = detailCourse?.response?.body?.items?.item || [];
  const useInfos = useInfo?.response?.body?.items?.item || [];
  const petInfo = petInfoData?.response?.body?.items?.item || undefined;
  const barrierFree = barrierFreeData?.response?.body?.items?.item || [];
  // @todo 요청 후 캐싱, 각 파트에 props로 넘기지 말고 캐시 정보 받아오도록 하기

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
            <Suspense fallback={<GlitchLogo />}>
              <DetailCard
                detailInfo={detailInfo}
                courses={courses}
                useInfos={useInfos}
                petInfo={petInfo}
                barrierFree={barrierFree}
              />
            </Suspense>
          </Modal>
          <Overlay />
        </>
      )}
    </>
  );
};

export default ModalCard;
