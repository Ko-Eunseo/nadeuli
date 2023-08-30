import { StyledTabBody, StyledTabBox } from "./styles";
import CardController from "@/components/organisms/card/CardController";
import { CardGrid, CardWrapper } from "../card/styledCard";
import { TabType } from "@/types/type";
import { InitTab } from "@/hooks/useTab";

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
        {tabCategory.map(({ code, name, label }, i) => {
          return (
            <StyledTabBox
              $active={curTab.code ? curTab.code === code : i === 0}
              key={code}
            >
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
