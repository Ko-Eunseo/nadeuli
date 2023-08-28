import TabItem from "@/components/atoms/tab/tabItem";
import { Cat2List } from "@/variables/courseCategory";
import { StyledTabHead } from "./styles";

const TabHead = ({
  tabList,
  setCurTab,
  curTab,
}: {
  tabList: Cat2List; //@todo: 추상화하기
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
