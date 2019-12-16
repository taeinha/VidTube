class Api::VideosController < ApplicationController
  # payload of videos and users, later adding likes and comments too

  def index
    @videos = Video.all.includes(:uploader)
    render :index
  end

  def show
    @video = Video.find(params[:id])
    @videos = Video.all
      .with_attached_thumbnail_file
      .includes(:uploader)
      .where.not(id: params[:id])
      .order(Arel.sql('random()'))
      .limit(5)
    @like_counts = @video.likes.group(:is_like).count
    @like_counts[true] = 0 if !@like_counts[true]
    @like_counts[false] = 0 if !@like_counts[false]
    
    render :show
  end

  def create
    @video = Video.new(video_params)
    @video.uploader_id = current_user.id
    if @video.save
      render :show
    else
      render json: @video.errors.full_messages, status: 422
    end
  end

  def update
    @video = current_user.videos.find(params[:id])
    if @video.update(video_params)
      render :show
    else
      render json: @video.errors.full_messages, status: 422
    end
  end

  def destroy
    @video = Video.find(params[:id])
    unless @video.uploader_id == current_user.id
      render json: ['You are not the uploader of this video!'], status: 422
      return
    end
    @video.destroy

    render :show
  end

  def create_like
    @like = Like.new(like_params)
    @like.user_id = current_user.user_id
    if @like.save
      render json: "You liked something!", status: 200
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

  def destroy_like

  end

  private
  def video_params
    params.require(:video).permit(:title, :description, :thumbnail_file, :video_file)
  end

  def like_params
    params.require(:like).permit(:is_like, :likable_type, :likable_id)
  end
end
