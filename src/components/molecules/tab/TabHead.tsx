import TabItem from "@/components/atoms/tab/tabItem";
import { StyledTabHead } from "./styles";
import { InitAllTab } from "@/recoil/atoms/tabState";

const TabHead = ({
  tabList,
  handleCurTab,
}: {
  tabList: InitAllTab[];
  handleCurTab: (tab: InitAllTab) => void;
}) => {
  return (
    <StyledTabHead>
      {tabList?.map(({ code, name, icon, isCurTab, tabPage }, i) => {
        return (
          <TabItem
            key={"catagoryHead" + code}
            label={name}
            isActive={isCurTab}
            Icon={icon}
            onClick={() => {
              handleCurTab({
                name,
                code,
                idx: i,
                tabPage,
                isCurTab: isCurTab,
              });
            }}
          />
        );
      })}
    </StyledTabHead>
  );
};

export default TabHead;
