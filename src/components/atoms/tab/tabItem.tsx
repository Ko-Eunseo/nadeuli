import { CourseCategory } from "@/variables/courseCategory";
import { StyledTabItem, StyledTabItemLi } from "./styles";

const TabItem = ({
  label,
  code,
  setCurTab,
  curTab,
}: {
  label: CourseCategory["name"];
  code: CourseCategory["code"];
  setCurTab: React.Dispatch<React.SetStateAction<string>>;
  curTab: string;
}) => {
  const handleTab = (code: CourseCategory["code"]) => {
    setCurTab(code);
  };

  return (
    <>
      <StyledTabItemLi active={curTab === code} onClick={() => handleTab(code)}>
        <StyledTabItem>{label}</StyledTabItem>
      </StyledTabItemLi>
    </>
  );
};

export default TabItem;
