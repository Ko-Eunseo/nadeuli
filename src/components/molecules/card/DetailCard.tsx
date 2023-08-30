import { RightSide, StyledDetailCard } from "./styledCard";
import Image from "next/image";
import { CardData } from "./Card";
import ContentBox from "@/components/atoms/content/ContentBox";
import IconBtn from "@/components/atoms/buttons/iconBtn/IconBtn";
import { IoCloseSharp } from "react-icons/io5";
import useModal from "@/hooks/useModal";
import DefaultImg from "@/components/atoms/content/DefaultImg";
import { IconContext } from "react-icons";
import Char from "@/components/atoms/texts/Character";

interface DetailData extends CardData {
  overview: string;
}
const DetailCard = ({ detailInfo }: { detailInfo: DetailData }) => {
  const { closeModal } = useModal();
  return (
    <>
      <StyledDetailCard>
        <RightSide>
          <IconContext.Provider value={{ size: "1.2rem" }}>
            <IconBtn Icon={IoCloseSharp} onClick={closeModal} />
          </IconContext.Provider>
        </RightSide>
        <div>
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
            <DefaultImg />
          )}
          <ContentBox title={detailInfo?.title} addr1={detailInfo?.addr1} />
        </div>
        {/* detail 정보 추가 */}
        <div>
          <Char size="md" weight="thin">
            {detailInfo?.overview}
          </Char>
        </div>
      </StyledDetailCard>
    </>
  );
};

export default DetailCard;
