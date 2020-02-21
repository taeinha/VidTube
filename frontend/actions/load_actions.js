export const SHOW_LOADER = "SHOW_LOADER";
export const HIDE_LOADER = "HIDE_LOADER";

export const showLoader = load => ({
  type: SHOW_LOADER,
  load
});

export const hideLoader = () => ({
  type: HIDE_LOADER
});
