@comments.each do |comment|
  like_counter = Hash.new(0);
  json.comments do
    json.set! comment.id do
      json.partial! 'comment', comment: comment
      comment.likes.each do |like|
        like_counter[like.is_like] += 1
        if current_user && like.user_id == current_user.id
          json.like do
            json.extract! like, :id, :is_like
          end
        end
      end
      json.like_counts like_counter
    end
  end

  json.users do
    json.set! comment.user_id do
      json.partial! "api/users/user", user: comment.user
    end
  end

  json.video do
    json.id @video.id
    json.comment_count @comment_count
  end
end
