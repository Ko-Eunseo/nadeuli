import { StyledTabBody, StyledTabBox } from "./styles";
import CardController from "@/components/organisms/card/CardController";
import { CardGrid, CardWrapper } from "../card/styledCard";
import { TabType } from "@/types/type";

const TabBody = ({
  curTab,
  tabCategory,
  cardData,
}: {
  curTab: string;
  tabCategory: TabType[];
  cardData: any;
}) => {
  return (
    <>
      <StyledTabBody>
        {tabCategory.map(({ code, name, label }) => {
          return (
            <StyledTabBox $active={curTab === code} key={code}>
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
