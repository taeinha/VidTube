export const SHOW_LOADER = "SHOW_LOADER";
export const HIDE_LOADER = "HIDE_LOADER";

export const showLoader = loader => ({
  type: SHOW_LOADER,
  loader
});

export const hideLoader = () => ({
  type: HIDE_LOADER
});
