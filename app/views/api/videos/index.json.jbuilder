@videos.each do |video|
  json.videos do
    json.set! video.id do
      json.partial! 'video', video: video
    end
  end

  json.users do
    json.set! video.uploader_id do
      json.partial! "api/users/user", user: video.uploader
    end
  end
end