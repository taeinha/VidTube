json.comment do
  json.partial! 'comment', comment: @comment
  json.like_counts @comment.like_counts
  if @like
    json.like do
      json.extract! @like, :id, :is_like
    end
  else
    json.like @like
  end
end

json.video do
  json.id @video.id
  json.comment_count @comment_count
end

json.user do
  json.partial! "api/users/user", user: @comment.user
  # json.comment_likes do 
  #   @comment.user.likes.each do |like|
  #     if like.likable_type == "Comment"
  #       json.set! like.likable_id do
  #         json.extract! like, :likable_id, :is_like
  #       end
  #     end
  #   end
  # end
end