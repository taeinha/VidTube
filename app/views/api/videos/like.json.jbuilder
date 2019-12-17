json.video do
  json.partial! 'video', video: @video
  json.like_counts @like_counts
end

json.user do
  json.partial! "api/users/user", user: current_user
  json.like @like
end