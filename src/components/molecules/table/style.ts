import { sizes, weights } from "@/styles/CharStyle";
import { styled } from "styled-components";

export const TableWrap = styled.div`
  overflow-y: auto;
  max-height: 300px;
`;
export const StyledTable = styled.table`
  font-size: ${sizes.md};
  font-weight: ${weights.thin};
  overflow: auto;
  margin: 1rem auto;
`;

export const StyledTd = styled.td`
  padding: 0.3rem 0.5rem;
`;

export const StyledTh = styled.th`
  padding: 0.3rem 0.5rem;
`;
