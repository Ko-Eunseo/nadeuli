import TabBody from "@/components/molecules/tab/TabBody";
import TabHead from "@/components/molecules/tab/TabHead";
import { StyledTab } from "./styles";
import { InitAllTab } from "@/recoil/atoms/tabState";

const Tab = ({
  tabList,
  handleCurTab,
  cardData,
}: {
  tabList: InitAllTab[];
  handleCurTab: (tab: InitAllTab) => void;
  cardData: any;
  isLoading: boolean;
}) => {
  return (
    <StyledTab>
      <TabHead handleCurTab={handleCurTab} tabList={tabList} />
      <TabBody tabCategory={tabList} allTab={tabList} cardData={cardData} />
    </StyledTab>
  );
};

export default Tab;
