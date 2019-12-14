json.video do
  json.partial! 'video', video: @video
  json.extract! @video, :description
end

json.user do
  json.partial! "api/users/user", user: @video.uploader
end