import { CourseCategory } from "@/variables/courseCategory";
import { StyledTabItem, StyledTabItemLi } from "./styles";
import { IconType } from "react-icons";
import { IconContext } from "react-icons";

const TabItem = ({
  label,
  code,
  setCurTab,
  curTab,
  Icon,
}: {
  label: CourseCategory["name"];
  code: CourseCategory["code"];
  setCurTab: React.Dispatch<React.SetStateAction<string>>;
  curTab: string;
  Icon: IconType;
}) => {
  const handleTab = (code: CourseCategory["code"]) => {
    setCurTab(code);
  };

  return (
    <>
      <StyledTabItemLi
        $active={curTab === code}
        onClick={() => handleTab(code)}
      >
        <IconContext.Provider value={{ color: "#ffffff", size: "1.5rem" }}>
          <Icon />
        </IconContext.Provider>
        <StyledTabItem>{label}</StyledTabItem>
      </StyledTabItemLi>
    </>
  );
};

export default TabItem;
