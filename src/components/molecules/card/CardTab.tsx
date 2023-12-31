import Char from "@/components/atoms/texts/Character";
import { DetailData } from "./DetailCard";
import useTab from "@/hooks/useTab";
import { TabType } from "@/types/type";
import TabHead from "../tab/TabHead";
import { StyledCardTab, StyledCardTabBody } from "./styledCard";
import { StyledTabBox } from "../tab/styles";
import { CourseTour } from "@/types/course";
import Table from "../table/Table";
import CourseCard from "./CourseCard";
import PetCard from "./PetCard";
import { PetTour } from "@/types/tourPet";

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
  const { tabState, tabList } = useTab({
    category: cardTabList,
  });
  const { curTab, setCurTab } = tabState;

  return (
    <StyledCardTab>
      <TabHead tabList={cardTabList} setCurTab={setCurTab} curTab={curTab} />
      <StyledCardTabBody>
        <StyledTabBox $active={curTab.idx === 0}>
          <Char size="md" weight="thin">
            {detailInfo?.overview}
          </Char>
          <Char size="md" weight="thin">
            {detailInfo?.tel && `tel: ` + detailInfo?.tel}
          </Char>
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
            <Char size="md" weight="thin">
              상세정보없음
            </Char>
          )}
        </StyledTabBox>
      </StyledCardTabBody>
    </StyledCardTab>
  );
};

export default CardTab;
