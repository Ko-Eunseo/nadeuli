import { weights } from "@/styles/CharStyle";
import { colors } from "@/styles/colors";
import { styled } from "styled-components";

export const StyledAccordion = styled.details`
  margin: 0.5rem 0 1rem;
  border-radius: 1rem;
  padding: 2px;
`;

export const AccordionTitle = styled.summary<{ $isOpen: boolean }>`
  color: ${({ $isOpen }) => ($isOpen ? colors.background : colors.green)};
  background-color: ${({ $isOpen }) =>
    $isOpen ? colors.green : colors.background};
  border: 0.5px solid ${colors.green};
  font-size: 18px;
  font-weight: ${weights.thin};
  border-radius: 1rem;
  padding: 0.5rem;
  cursor: pointer;
  list-style-type: none;
  text-indent: 0.5rem;

  &:hover {
    background-color: ${colors.green};
    color: ${colors.background};
  }
`;
