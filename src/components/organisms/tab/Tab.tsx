import TabBody from "@/components/molecules/tab/TabBody";
import TabHead from "@/components/molecules/tab/TabHead";
import { StyledTab } from "./styles";
import { Area } from "@/types/area";
import { useThemeCourseTour } from "@/hooks/useTourInfo";
import { Cat2 } from "@/types/course";
import { TabType } from "@/types/type";

const Tab = ({
  areaCode,
  tabList,
  tabState,
}: {
  areaCode: Area["code"];
  tabList: TabType[];
  tabState: {
    setCurTab: React.Dispatch<React.SetStateAction<string>>;
    curTab: string;
  };
}) => {
  const { setCurTab, curTab } = tabState;

  const { data, isLoading } = useThemeCourseTour({
    areaCode: areaCode || 1,
    cat2: curTab as Cat2["code"],
  });
  const cardData = data?.response?.body?.items?.item || [];

  return (
    <StyledTab>
      <TabHead tabList={tabList} setCurTab={setCurTab} curTab={curTab} />
      <TabBody tabCategory={tabList} curTab={curTab} cardData={cardData} />
    </StyledTab>
  );
};

export default Tab;
