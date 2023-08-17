const getConfirm = (callback: Function, info: string) => {
  if (window.confirm(info)) {
    return callback;
  }
};

export default getConfirm;
