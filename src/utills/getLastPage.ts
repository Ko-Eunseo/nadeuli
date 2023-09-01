export const getLastPage = (totalCount: number, numOfRows: number = 10) => {
  if (totalCount < numOfRows) return 1;
  return Math.ceil(totalCount / numOfRows);
};
