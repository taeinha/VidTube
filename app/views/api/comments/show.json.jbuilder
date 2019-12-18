json.comment do
  json.partial! 'comment', comment: @comment
end

json.video do
  json.id @video.id
  json.comment_count @comment_count
end