const getConfirm = (callback: Function, info: string) => {
  if (window.confirm(info)) {
    callback();
  }
  return;
};

export default getConfirm;
