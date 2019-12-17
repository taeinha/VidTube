json.video do
  json.partial! 'video', video: @video
  json.extract! @video, :description
  json.videoUrl url_for(@video.video_file)
  if @videos
    json.showVideos @videos.map { |vid| vid.id }
  end
  if @like_counts
    json.like_counts @like_counts
  end
end

json.user do
  json.partial! "api/users/user", user: @video.uploader
  if @like
    json.like @like
  end
end

if @videos
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
end