import { StyledTabItem, StyledTabItemLi } from "./styles";
import { IconContext } from "react-icons";
import { TabType } from "@/types/type";

type TabItemProps = Pick<TabType, "code"> & {
  Icon: TabType["icon"];
  label: TabType["name"];
  setCurTab: React.Dispatch<React.SetStateAction<string>>;
  curTab: string;
};

const TabItem = ({ label, code, setCurTab, curTab, Icon }: TabItemProps) => {
  const handleTab = (code: TabType["code"]) => {
    setCurTab(code);
  };

  return (
    <>
      <StyledTabItemLi
        $active={curTab === code}
        onClick={() => handleTab(code)}
      >
        {Icon && (
          <IconContext.Provider value={{ color: "#ffffff", size: "1.5rem" }}>
            <Icon />
          </IconContext.Provider>
        )}
        <StyledTabItem>{label}</StyledTabItem>
      </StyledTabItemLi>
    </>
  );
};

export default TabItem;
