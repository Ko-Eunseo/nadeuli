import IconBtn from "@/components/atoms/buttons/iconBtn/IconBtn";
import { IconContext } from "react-icons";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import { BtnLayout } from "./styled";
import { colors } from "@/styles/colors";

const PageBtns = ({
  handlePrev,
  handleNext,
  pageNo,
  lastPage,
}: {
  handlePrev: () => void;
  handleNext: () => void;
  pageNo?: number;
  lastPage?: number;
}) => {
  return (
    <BtnLayout>
      <IconContext.Provider value={{ size: "2rem" }}>
        <IconBtn
          Icon={GrFormPreviousLink}
          onClick={handlePrev}
          disabled={pageNo === 1}
        />
        <IconBtn
          Icon={GrFormNextLink}
          onClick={handleNext}
          disabled={pageNo === lastPage}
        />
      </IconContext.Provider>
    </BtnLayout>
  );
};

export default PageBtns;
