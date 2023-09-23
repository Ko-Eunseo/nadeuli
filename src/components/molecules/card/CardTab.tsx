import Char from "@/components/atoms/texts/Character";
import { DetailData } from "./DetailCard";
import { TabType } from "@/types/type";
import {
  StyledCardTab,
  StyledCardTabBody,
  StyledCourseCard,
} from "./styledCard";
import { StyledTabBox, StyledTabHead } from "../tab/styles";
import { CourseTour } from "@/types/course";
import Table from "../table/Table";
import CourseCard from "./CourseCard";
import PetCard from "./PetCard";
import { PetTour } from "@/types/tourPet";
import Nodata from "../noData/Nodata";
import useCardTab, { InitTab } from "@/hooks/useCardTab";
import TabItem from "@/components/atoms/tab/tabItem";

const CardTab = ({
  detailInfo,
  cardTabList,
  courses,
  useInfos,
  petInfo,
  barrierFree,
}: {
  detailInfo: DetailData;
  cardTabList: TabType[];
  courses: CourseTour[];
  useInfos: any;
  petInfo: PetTour;
  barrierFree: any;
}) => {
  const { tabState, tabList } = useCardTab({
    category: cardTabList,
  });
  const { curTab, setCurTab } = tabState;

  const handleTab = ({ name, code, idx }: InitTab) => {
    setCurTab({ name, code, idx });
  };

  return (
    <StyledCardTab>
      <StyledTabHead>
        {tabList?.map(({ code, name }, i) => {
          return (
            <TabItem
              key={"cardTab" + code}
              label={name}
              isActive={curTab.code ? curTab.code === code : i === 0}
              onClick={() => handleTab({ name, code, idx: i })}
            />
          );
        })}
      </StyledTabHead>
      <StyledCardTabBody>
        <StyledTabBox $active={curTab.idx === 0}>
          <StyledCourseCard>
            <Char size="md" weight="thin">
              {detailInfo?.overview}
            </Char>
            <Char size="md" weight="thin">
              {detailInfo?.tel && `tel: ` + detailInfo?.tel}
            </Char>
          </StyledCourseCard>
        </StyledTabBox>
        <StyledTabBox $active={curTab.idx === 1}>
          {useInfos && <Table tContents={useInfos} />}
        </StyledTabBox>
        <StyledTabBox $active={curTab.idx === 2}>
          {courses.length || petInfo || barrierFree.length ? (
            <>
              {courses && <CourseCard courses={courses} />}
              {petInfo && <PetCard petInfo={petInfo} />}
              {barrierFree && <Table tContents={barrierFree} />}
            </>
          ) : (
            <Nodata text="관련 정보가 없습니다." size="md" weight="thin" />
          )}
        </StyledTabBox>
      </StyledCardTabBody>
    </StyledCardTab>
  );
};

export default CardTab;
