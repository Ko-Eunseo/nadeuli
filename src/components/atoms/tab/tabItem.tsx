import { StyledTabItem, StyledTabItemLi } from "./styles";
import { IconContext } from "react-icons";
import { TabType } from "@/types/type";

type TabItemProps = {
  Icon: TabType["icon"];
  label: TabType["name"];
  onClick: () => void;
  isActive: boolean;
};

const TabItem = ({ label, onClick, Icon, isActive }: TabItemProps) => {
  return (
    <>
      <StyledTabItemLi $active={isActive} onClick={onClick}>
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
