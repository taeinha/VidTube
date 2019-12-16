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

export const createVideo = formData => {
  return $.ajax({
    method: "POST",
    url: '/api/videos/',
    data: formData,
    contentType: false,
    processData: false
  });
};

export const updateVideo = (formData, videoId) => (
  $.ajax({
    method: "PATCH",
    url: `/api/videos/${videoId}`,
    data: formData,
    contentType: false,
    processData: false
  })
);

export const deleteVideo = id => (
  $.ajax({
    method: "DELETE",
    url: `/api/videos/${id}`
  })
);