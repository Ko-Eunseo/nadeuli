import { blackGothic } from "@/app/font";
import Char from "../texts/Character";
import { AccordionTitle, StyledAccordion } from "./styled";
import { useState } from "react";

const Accordion = ({
  summary,
  detail,
}: {
  summary: string;
  detail: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <StyledAccordion onClick={handleOpen}>
      <AccordionTitle $isOpen={isOpen} className={blackGothic.className}>
        {summary}
      </AccordionTitle>
      <Char size="sm" weight="thin">
        {detail}
      </Char>
    </StyledAccordion>
  );
};

export default Accordion;
