import ContentBox from "@/components/atoms/content/ContentBox";
import { StyledCard } from "./styledCard";
import Image from "next/image";
import DefaultImg from "@/components/atoms/content/DefaultImg";
import useModal from "@/hooks/useModal";
import { ContentType } from "@/types/contentType";
import { Suspense } from "react";
import SkeletonImg from "@/components/atoms/skeleton/SkeletonImg";

interface CardProps {
  data: CardData;
}

export interface CardData {
  addr1: string;
  areacode: number;
  contentid: string;
  contenttypeid: ContentType["id"];
  firstimage: string;
  title: string;
}

const Card = ({ data }: CardProps) => {
  const { addr1, areacode, firstimage, title, contentid, contenttypeid } = data;
  const { openModal, detailInfo } = useModal();

  return (
    <Suspense fallback={<SkeletonImg />}>
      <StyledCard
        onClick={() =>
          openModal({ contentId: contentid, contentTypeId: contenttypeid })
        }
      >
        {firstimage ? (
          <Image
            src={firstimage}
            alt={title}
            width={200}
            height={200}
            style={{ borderRadius: "0.5rem 0.5rem 0 0" }}
            priority //LCP(Largest Contentful Paint)
          />
        ) : (
          <DefaultImg />
        )}
        <ContentBox title={title} addr1={addr1} />
      </StyledCard>
    </Suspense>
  );
};

export default Card;
