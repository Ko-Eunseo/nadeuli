import { StyledTabBody, StyledTabBox } from "./styles";
import CardController from "@/components/organisms/card/CardController";
import { CardGrid, CardWrapper } from "../card/styledCard";
import { TabType } from "@/types/type";
import { CenterBox } from "@/components/atoms/styles";
import Nodata from "../noData/Nodata";
import { InitAllTab } from "@/recoil/atoms/tabState";

const TabBody = ({
  allTab,
  tabCategory,
  cardData,
}: {
  allTab: InitAllTab[];
  tabCategory: TabType[];
  cardData: any;
}) => {
  const currentTabCode = allTab.find((tab) => tab.isCurTab)?.code || "";

  return (
    <>
      <StyledTabBody>
        {tabCategory?.map(({ code }, i) => {
          return (
            <StyledTabBox
              $active={currentTabCode ? currentTabCode === code : i === 0}
              key={"categoryBody" + code}
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
