import { LeftSide, RightSide, StyledDetailCard } from "./styledCard";
import Image from "next/image";
import { CardData } from "./Card";
import ContentBox from "@/components/atoms/content/ContentBox";
import IconBtn from "@/components/atoms/buttons/iconBtn/IconBtn";
import { IoCloseSharp } from "react-icons/io5";
import useModal from "@/hooks/useModal";
import DefaultImg from "@/components/atoms/content/DefaultImg";
import { IconContext } from "react-icons";
import CardTab from "./CardTab";
import { cardTabList } from "@/variables/cardTabList";
import { CourseTour } from "@/types/course";
import { PetTour } from "@/types/tourPet";

export interface DetailData extends CardData {
  overview: string;
  tel: string;
  homepage: string;
}
const DetailCard = ({
  detailInfo,
  courses,
  useInfos,
  petInfo,
  barrierFree,
}: {
  detailInfo: DetailData;
  courses: CourseTour[];
  useInfos: any;
  petInfo: PetTour;
  barrierFree: any;
}) => {
  const { closeModal } = useModal();

  return (
    <>
      <StyledDetailCard>
        <RightSide>
          <IconContext.Provider value={{ size: "1.2rem" }}>
            <IconBtn Icon={IoCloseSharp} onClick={closeModal} />
          </IconContext.Provider>
        </RightSide>
        <LeftSide>
          {detailInfo?.firstimage ? (
            <Image
              src={detailInfo?.firstimage}
              alt={detailInfo?.title}
              width={300}
              height={300}
              style={{ borderRadius: "0.5rem" }}
              priority
            />
          ) : (
            <DefaultImg $width={"300px"} $height={"300px"} />
          )}
          <ContentBox title={detailInfo?.title} addr1={detailInfo?.addr1} />
        </LeftSide>
        <CardTab
          detailInfo={detailInfo}
          cardTabList={cardTabList}
          courses={courses}
          useInfos={useInfos}
          petInfo={petInfo}
          barrierFree={barrierFree}
        />
      </StyledDetailCard>
    </>
  );
};

export default DetailCard;
// tab 사용(오른쪽)
// 1. 개요: overview 존, 전화번호, 홈페이지
// 2. 코스정보: contentTypeId: 25인경우
// 3. 이용안내: 애견동반여부, 무장애 여부(유모차)
