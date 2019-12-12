json.videos do
  @videos.each do |video|
    json.set! video.id do
      json.extract! video, :id, :title, :view_count, :uploader_id
      json.videoUrl url_for(video.video)
    end
  end
end

json.users do
  @videos.each do |video|
    json.set! video.uploader_id do
      json.extract! video.uploader, :username, :email, :id
    end
  end
end