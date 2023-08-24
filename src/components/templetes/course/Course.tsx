import Char from "@/components/atoms/texts/Character";
import { CardWrapper } from "@/components/molecules/card/styledCard";
import CardController from "@/components/organisms/card/CardController";
import { useThemeCourseTour } from "@/hooks/useTourInfo";
import { Area } from "@/types/area";
import { Cat2 } from "@/types/course";

const Course = ({
  name,
  code,
  label,
  areaCode,
}: {
  name: string;
  code: Cat2["code"];
  label: string;
  areaCode: Area["code"];
}) => {
  const { data, isLoading } = useThemeCourseTour({
    areaCode: areaCode || 1,
    cat2: code,
  });
  const cardData = data?.response?.body?.items?.item || [];

  return (
    <>
      {cardData.length !== 0 && (
        <>
          <Char size="md" weight="bold">
            {label}
          </Char>
          <CardWrapper>
            <CardController cardData={cardData} />
          </CardWrapper>
        </>
      )}
    </>
  );
};

export default Course;
