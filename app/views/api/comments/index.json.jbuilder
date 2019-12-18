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
      # if current_user == comment.user
      #   json.comment_likes do 
      #     comment.user.likes.each do |like|
      #       if like.likable_type == "Comment"
      #         json.set! like.likable_id do
      #           json.extract! like, :likable_id, :is_like
      #         end
      #       end
      #     end
      #   end
      # end
    end
  end

  json.video do
    json.id @video.id
    json.comment_count @comment_count
  end
end
