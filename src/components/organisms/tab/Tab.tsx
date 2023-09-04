import TabBody from "@/components/molecules/tab/TabBody";
import TabHead from "@/components/molecules/tab/TabHead";
import { StyledTab } from "./styles";
import { TabType } from "@/types/type";
import { InitTab } from "@/hooks/useTab";

const Tab = ({
  tabList,
  tabState,
  cardData,
  isLoading,
}: {
  tabList: TabType[];
  tabState: {
    setCurTab: React.Dispatch<React.SetStateAction<InitTab>>;
    curTab: InitTab;
  };
  cardData: any;
  isLoading: boolean;
}) => {
  const { setCurTab, curTab } = tabState;

  return (
    <StyledTab>
      <TabHead tabList={tabList} setCurTab={setCurTab} curTab={curTab} />
      <TabBody tabCategory={tabList} curTab={curTab} cardData={cardData} />
    </StyledTab>
  );
};

export default Tab;
