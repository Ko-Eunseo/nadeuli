import { StyledTabBody, StyledTabBox } from "./styles";
import CardController from "@/components/organisms/card/CardController";
import { CardGrid, CardWrapper } from "../card/styledCard";
import { TabType } from "@/types/type";
import { InitTab } from "@/hooks/useTab";
import { CenterBox } from "@/components/atoms/styles";
import Nodata from "../noData/Nodata";

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
              key={"category" + code}
            >
              <CardWrapper>
                {cardData.length > 0 ? (
                  <CardGrid>
                    <CardController cardData={cardData} />
                  </CardGrid>
                ) : (
                  <CenterBox>
                    <Nodata
                      text="관련 정보가 없습니다."
                      size="md"
                      weight="thin"
                    />
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
