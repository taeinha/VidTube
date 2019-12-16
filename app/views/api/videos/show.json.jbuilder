json.video do
  json.partial! 'video', video: @video
  json.extract! @video, :description
  json.videoUrl url_for(@video.video_file)
end

json.user do
  json.partial! "api/users/user", user: @video.uploader
end