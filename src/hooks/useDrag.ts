import { OptionhandlerParam } from "@/types/type";
import useSelect from "./useSelect";

const useDrag = () => {
  const { handleSelectChange } = useSelect();

  const handleDragStart = (
    event: React.DragEvent<HTMLLIElement>,
    value: OptionhandlerParam
  ) => {
    event.dataTransfer.setData("application/json", JSON.stringify(value));
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const droppedData = JSON.parse(
      event.dataTransfer.getData("application/json")
    );
    handleSelectChange(droppedData);
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  return { handleDragStart, handleDrop, handleDragOver };
};

export default useDrag;
