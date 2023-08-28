import { StyledTabBody, StyledTabBox } from "./styles";
import { Cat2List } from "@/variables/courseCategory";
import Char from "@/components/atoms/texts/Character";
import CardController from "@/components/organisms/card/CardController";
import { CardGrid, CardWrapper } from "../card/styledCard";

const TabBody = ({
  curTab,
  tabCategory,
  cardData,
}: {
  curTab: string;
  tabCategory: Cat2List; //@todo: 추상화하기
  cardData: any;
}) => {
  return (
    <>
      <StyledTabBody>
        {tabCategory.map(({ code, name, label }) => {
          return (
            <StyledTabBox $active={curTab === code} key={code}>
              {/* <Char size="md" weight="thin">
                {label}
              </Char> */}
              <CardWrapper>
                <CardGrid>
                  <CardController cardData={cardData} />
                </CardGrid>
              </CardWrapper>
            </StyledTabBox>
          );
        })}
      </StyledTabBody>
    </>
  );
};

export default TabBody;
