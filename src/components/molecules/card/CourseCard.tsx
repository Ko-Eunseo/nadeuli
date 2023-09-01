import { CourseTour } from "@/types/course";
import { StyledCourseCard } from "./styledCard";
import Accordion from "@/components/atoms/accordion/Accordion";

const CourseCard = ({ courses }: { courses: CourseTour[] }) => {
  return (
    <StyledCourseCard>
      {courses?.map((course) => {
        return (
          <Accordion
            key={course?.contentid}
            summary={course?.subname}
            detail={course?.subdetailoverview}
          />
        );
      })}
    </StyledCourseCard>
  );
};

export default CourseCard;
