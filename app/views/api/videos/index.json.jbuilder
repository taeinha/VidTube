json.videos do
  @videos.each do |video|
    json.set! video.id do
      # json.extract! video, :id, :title, :view_count, :uploader_id, :created_at
      json.partial! 'video', video: video
      # json.thumbnailUrl url_for(video.thumbnail_file)
    end
  end
end

json.users do
  @videos.each do |video|
    json.set! video.uploader_id do
      json.partial! "api/users/user", user: video.uploader
    end
  end
end