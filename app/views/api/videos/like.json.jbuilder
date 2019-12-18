json.video do
  json.partial! 'video', video: @video
  json.like_counts @like_counts
  if @like
    json.like do
      json.extract! @like, :id, :is_like
    end
  else
    json.like @like
  end
end

# json.user do
#   json.partial! "api/users/user", user: current_user
#   if @like
#     json.like do
#       json.extract! @like, :id, :is_like
#     end
#   else
#     json.like @like
#   end
# end