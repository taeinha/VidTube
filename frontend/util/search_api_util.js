export const fetchSearchVideos = (result) => {
  return $.ajax({
    method: "GET",
    url: "/api/search",
    data: { result }
  });
};