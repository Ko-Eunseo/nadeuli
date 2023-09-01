import Char from "@/components/atoms/texts/Character";

interface PetInfo {
  contentid: string;
  acmpyTypeCd: string;
  etcAcmpyInfo: string;
  acmpyNeedMtr: string;
}
const PetCard = ({ petInfo }: { petInfo: PetInfo }) => {
  return (
    <>
      <div>
        {petInfo?.acmpyTypeCd && (
          <Char size={"md"} weight={"mid"}>
            동반가능
          </Char>
        )}
        {petInfo?.etcAcmpyInfo && (
          <Char size={"sm"} weight={"thin"}>
            {petInfo?.etcAcmpyInfo}
          </Char>
        )}
        {petInfo?.acmpyNeedMtr && (
          <Char size={"sm"} weight={"thin"}>
            {petInfo?.acmpyNeedMtr}
          </Char>
        )}
      </div>
    </>
  );
};
export default PetCard;

// pettour
// {
// "contentid": "1223212",
// "acmpyTypeCd": "동반가능",
// "etcAcmpyInfo": "반려견 인식표 및 리드 줄, 입마개 필수입니다. 반려견 배변 시 보호자가 배변봉투, 물티슈 등 지참 후 즉시 처리하여야 합니다.\n*반려견 동반 운영 정책은 현지 사정에 따라 변동 될 수 있습니다.",
// "acmpyNeedMtr": "입마개 착용,목줄 착용,기타"
// },
