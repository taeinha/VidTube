class Api::VideosController < ApplicationController
  # payload of videos and users, later adding likes and comments too

  def index
    @videos = Video.all.includes(:uploader)
    render :index
  end

  def show
    @video = Video.find(params[:id])
    videos = Video.all
      .includes(:uploader)
      .where.not(id: params[:id])
      .order("RANDOM()")
      .limit(5)
    
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

  private
  def video_params
    params.require(:video).permit(:title, :description, :thumbnail_file, :video_file)
  end
end
