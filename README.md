# <p align="center"> VidTube (YouTube clone) </p>

<br />
<p align="center">
  <a href="https://vidtube-app.herokuapp.com/">
    <img src="https://github.com/taeinha/VidTube/blob/master/app/assets/images/vidtube.png?raw=true" alt="VidTube Logo" /> 
  </a>
</p>
<br />

# Table of Contents
* <a href="#intro">Introduction</a>
* <a href="#technologies">Technologies</a>
* <a href="#features">Features</a>
* <a href="#challenges">Challenges</a>
* <a href="#future">Future Considerations</a>

<br />
<div id="intro"></div>

# Introduction
VidTube is a video-sharing platform (YouTube clone) where users can upload and share videos that other users can view, like, or comment on.

<br />
<div id="technologies"></div>

# Technologies

* React (16.12.0)
* Redux (4.0.4)
* Ruby on Rails (5.2.4)
* Amazon Web Services (S3)
* Heroku

<br />
<div id="features"></div>

# Features
Some VidTube features include but are not limited to:
* User authentication
* View, upload, update, or delete videos
* Create, edit or delete comments made on videos
* Like or Dislike videos and comments

<br />
<div id="challenges"></div>

# Challenges
The implementation of `likes` was a learning experience due to its polymorphic associations with `videos` and `comments`. For instance, the Video Show page renders the main video item, a list of randomized videos, and the comments associated with the main video. Additionally, data on likes for the main video and all of its comments are also required for the frontend state.

The following is the `comments_controller#index` action, where multiple queries were made being sent back up for each comment to the frontend.

```ruby
def index
  @video = Video.find(params[:video_id])
  @comments = @video.comments.includes(:user, :likes)
  @comment_count = @video.comments.count
  render :index
end
```

Despite eager loading with `.includes` to pre-fetch the comments data including their users and likes, trying to fetch data to get the count of likes and dislikes for each of the comments would still make N+1 queries to the database, which was sub-optimal.

Instead, a hash counter was used to iterate through each of the likes per comment, as seen in the `index.json.jbuilder`.

```ruby
@comments.each do |comment|
  like_counter = Hash.new(0);
  json.comments do
    json.set! comment.id do
      json.partial! 'comment', comment: comment
      comment.likes.each do |like|
        like_counter[like.is_like] += 1
        if current_user && like.user_id == current_user.id
          json.like do
            json.extract! like, :id, :is_like
          end
        end
      end
      json.like_counts like_counter
    end
  end
end
```
Although this is an additional loop for each comments, it appears to be more optimal than making N+1 queries to the database.

A future consideration would be to add two columns in the comments table to track their like and dislike counts. However, this will require an additional post request.

<br />
<div id="future"></div>

# Future Considerations
* User channels - users can have multiple channels, where videos would also be attached to channels
* Parent comments - users can reply to comments
* Subscriptions - users can subscribe to channels
* Autoplay - when enabled, a queue of videos will automatically be played after the current one finishes
* CSS animations - loading animations