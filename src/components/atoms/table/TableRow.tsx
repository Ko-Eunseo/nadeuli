import { StyledTd } from "@/components/molecules/table/style";
import { excludedKeys } from "@/variables/tableList";

const TableRow = ({ tContent }: { tContent: { [key: string]: string } }) => {
  const shouldRenderRow = (key: string, value: string) => {
    return (
      value !== "" &&
      value !== "없음" &&
      value !== "0" &&
      !excludedKeys.includes(key)
    );
  };

  return (
    <>
      {Object.entries(tContent)?.map(([key, value], i) => {
        const newRow = shouldRenderRow(key, value);
        return (
          newRow && (
            <tr key={i}>
              <StyledTd>{key}</StyledTd>
              <StyledTd>{value}</StyledTd>
            </tr>
          )
        );
      })}
    </>
  );
};

export default TableRow;
