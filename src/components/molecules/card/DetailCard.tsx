import { StyledCard } from "./styledCard";
import Image from "next/image";
import DefaultImg from "@/components/atoms/content/DefaultImg";
import { CardData } from "./Card";
import ContentBox from "@/components/atoms/content/ContentBox";

const DetailCard = ({ data }: { data: CardData }) => {
  return (
    <>
      <StyledCard>
        <Image
          src={data?.firstimage}
          alt={data?.title}
          width={200}
          height={200}
          style={{ borderRadius: "0.5rem 0.5rem 0 0" }}
          priority
        />
        <ContentBox title={data?.title} addr1={data?.addr1} />
      </StyledCard>
    </>
  );
};

export default DetailCard;
