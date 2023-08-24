import Course from "@/components/templetes/course/Course";
import { StyledTabBody, StyledTabBox } from "./styles";
import { Cat2List } from "@/variables/courseCategory";
import { Area } from "@/types/area";

const TabBody = ({
  areaCode,
  curTab,
  tabCategory,
}: {
  areaCode: Area["code"];
  curTab: string;
  tabCategory: Cat2List;
}) => {
  return (
    <>
      <StyledTabBody>
        {tabCategory.map(({ code, name, label }) => {
          return (
            <StyledTabBox active={curTab === code} key={code}>
              <Course
                key={code}
                name={name}
                code={code}
                label={label}
                areaCode={areaCode}
              />
            </StyledTabBox>
          );
        })}
      </StyledTabBody>
    </>
  );
};

export default TabBody;
