import { StyledTabBody, StyledTabBox } from "./styles";
import CardController from "@/components/organisms/card/CardController";
import { CardGrid, CardWrapper } from "../card/styledCard";
import { TabType } from "@/types/type";
import { InitTab } from "@/hooks/useTab";
import Char from "@/components/atoms/texts/Character";
import { CenterBox } from "@/components/atoms/styles";

const TabBody = ({
  curTab,
  tabCategory,
  cardData,
}: {
  curTab: InitTab;
  tabCategory: TabType[];
  cardData: any;
}) => {
  return (
    <>
      <StyledTabBody>
        {tabCategory?.map(({ code, name, label }, i) => {
          return (
            <StyledTabBox
              $active={curTab.code ? curTab.code === code : i === 0}
              key={code}
            >
              <CardWrapper>
                {cardData.length > 0 ? (
                  <CardGrid>
                    <CardController cardData={cardData} />
                  </CardGrid>
                ) : (
                  <CenterBox>
                    <Char size="md" weight="thin">
                      관련 데이터가 없습니다.
                    </Char>
                  </CenterBox>
                )}
              </CardWrapper>
            </StyledTabBox>
          );
        })}
      </StyledTabBody>
    </>
  );
};

export default TabBody;
