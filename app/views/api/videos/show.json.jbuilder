json.video do
  json.partial! 'video', video: @video
  json.extract! @video, :description
  json.videoUrl url_for(@video.video_file)
  json.showVideos @videos.map { |vid| vid.id }
end

json.user do
  json.partial! "api/users/user", user: @video.uploader
end

json.videos do
  @videos.each do |vid|
    json.set! vid.id do
      json.partial! 'video', video: vid
    end
  end
end

json.users do
  @videos.each do |vid|
    json.set! vid.uploader_id do
      json.partial! "api/users/user", user: vid.uploader
    end
  end
end