export const fetchAllVideos = () => (
  $.ajax({
    method: "GET",
    url: "/api/videos",
  })
);

export const fetchSingleVideo = id => (
  $.ajax({
    method: "GET",
    url: `/api/videos/${id}`,
  })
);

export const createVideo = video => (
  $.ajax({
    method: "POST",
    url: '/api/videos/',
    data: { video }
  })
);

export const updateVideo = video => (
  $.ajax({
    method: "PATCH",
    url: `/api/videos/${video.id}`,
    data: { video }
  })
);

export const deleteVideo = id => (
  $.ajax({
    method: "DELETE",
    url: `/api/videos/${id}`
  })
);