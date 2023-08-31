import { StyledTh } from "@/components/molecules/table/style";

const TableHead = ({ tHeader }: { tHeader: string }) => {
  return (
    <thead>
      <tr>
        <StyledTh>{tHeader}</StyledTh>
      </tr>
    </thead>
  );
};

export default TableHead;
