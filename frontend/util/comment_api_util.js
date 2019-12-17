export const fetchAllComments = (videoId) => (
  $.ajax({
    method: "GET",
    url: `/api/videos/${videoId}/comments`
  })
);

export const createComment = comment => (
  $.ajax({
    method: "POST",
    url: `/api/videos/${comment.video_id}/comments`,
    data: { comment }
  })
);

export const updateComment = comment => (
  $.ajax({
    method: "PATCH",
    url: `/api/comments/${comment.id}`,
    data: { comment }
  })
);

export const deleteComment = id => (
  $.ajax({
    method: "DELETE",
    url: `/api/comments/${id}`,
  })
);