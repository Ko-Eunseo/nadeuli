import TableHead from "@/components/atoms/table/TableHead";
import TableRow from "@/components/atoms/table/TableRow";
import { StyledTable, TableWrap } from "./style";

export type TContent = { [tBody: string]: string };
export interface TableProps {
  tHeader?: string;
  tContents: TContent[];
}

const Table = ({ tHeader, tContents }: TableProps) => {
  return (
    <TableWrap>
      <StyledTable>
        <>{tHeader && <TableHead tHeader={tHeader} />}</>
        <tbody>
          {tContents?.map((tContent, i) => {
            return <TableRow key={i} tContent={tContent} />;
          })}
        </tbody>
      </StyledTable>
    </TableWrap>
  );
};

export default Table;
