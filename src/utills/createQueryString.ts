export const createQueryString = (params: {}): string => {
  const queryString = Object.entries(params)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");

  return queryString;
};
