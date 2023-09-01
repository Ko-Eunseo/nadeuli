import TabItem from "@/components/atoms/tab/tabItem";
import { StyledTabHead } from "./styles";
import { TabType } from "@/types/type";
import { InitTab } from "@/hooks/useTab";

const TabHead = ({
  tabList,
  setCurTab,
  curTab,
}: {
  tabList: TabType[];
  setCurTab: React.Dispatch<React.SetStateAction<InitTab>>;
  curTab: InitTab;
}) => {
  const handleTab = ({ name, code, idx }: InitTab) => {
    setCurTab({ name, code, idx });
  };

  return (
    <StyledTabHead>
      {tabList?.map(({ code, name, label, icon }, i) => {
        return (
          <TabItem
            key={code}
            label={name}
            isActive={curTab.code ? curTab.code === code : i === 0}
            Icon={icon}
            onClick={() => handleTab({ name, code, idx: i })}
          />
        );
      })}
    </StyledTabHead>
  );
};

export default TabHead;
