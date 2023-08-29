import TabItem from "@/components/atoms/tab/tabItem";
import { StyledTabHead } from "./styles";
import { TabType } from "@/types/type";

const TabHead = ({
  tabList,
  setCurTab,
  curTab,
}: {
  tabList: TabType[];
  setCurTab: React.Dispatch<React.SetStateAction<string>>;
  curTab: string;
}) => {
  return (
    <StyledTabHead>
      {tabList?.map(({ code, name, label, icon }) => {
        return (
          <TabItem
            key={code}
            code={code}
            label={name}
            setCurTab={setCurTab}
            curTab={curTab}
            Icon={icon}
          />
        );
      })}
    </StyledTabHead>
  );
};

export default TabHead;
