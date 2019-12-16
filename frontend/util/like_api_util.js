export const createVideoLike = like => {
  return $.ajax({
    method: "POST",
    url: `/api/videos/${like.likable_id}/create_like`,
    data: { like }
  });
};
export const deleteVideoLike = videoId => {
  return $.ajax({
    method: "DELETE",
    url: `/api/videos/${videoId}/destroy_like`,
    data: { videoId }
  });
};


export const createCommentLike = like => {
  return $.ajax({
    method: "POST",
    url: `/api/comments/${like.likable_id}/create_like`,
    data: { like }
  });
};

export const deleteCommentLike = commentId => {
  return $.ajax({
    method: "DELETE",
    url: `/api/comments/${commentId}/destroy_like`,
    data: { commentId }
  });
};