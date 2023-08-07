import ContentBox from "@/components/atoms/content/ContentBox";
import { StyledCard } from "./styledCard";
import Image from "next/image";
import DefaultImg from "@/components/atoms/content/DefaultImg";

interface CardProps {
  data: CardData;
}

export interface CardData {
  addr1: string;
  areacode: number;
  contentId: string;
  contentTypeId: string;
  firstimage: string;
  title: string;
  // firstImage2: string;
  // mapx: string;
  // mapy: string;
  // mlevel: string;
}

const Card = ({ data }: CardProps) => {
  const { addr1, areacode, firstimage, title } = data;
  // 이미지 swipe
  return (
    <StyledCard>
      {firstimage ? (
        <Image
          src={firstimage}
          alt={title}
          width={200}
          height={200}
          style={{ borderRadius: "0.5rem 0.5rem 0 0" }}
        />
      ) : (
        <DefaultImg />
      )}
      <ContentBox title={title} addr1={addr1} />
    </StyledCard>
  );
};

export default Card;
