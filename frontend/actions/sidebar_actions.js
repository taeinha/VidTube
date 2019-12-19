export const SHOW_SIDE_BAR = "SHOW_SIDE_BAR";
export const HIDE_SIDE_BAR = "HIDE_SIDE_BAR";

export const showSidebar = sidebar => ({
  type: SHOW_SIDE_BAR,
  sidebar
});

export const hideSidebar = () => ({
  type: HIDE_SIDE_BAR
});