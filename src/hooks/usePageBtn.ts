import { useState } from "react";

const usePageBtn = () => {
  const [pageNo, setPageNo] = useState(1);

  const handlePrev = () => {
    setPageNo(pageNo - 1);
  };

  const handleNext = () => {
    setPageNo(pageNo + 1);
  };

  return { pageNo, handlePrev, handleNext };
};

export default usePageBtn;
