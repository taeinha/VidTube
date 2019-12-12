class Api::VideosController < ApplicationController
  # payload of videos and users, later adding likes and comments too
  def index
    @videos = Video.all.includes(:uploader)
    render :index
  end

  def show
    @video = Video.find(params[:id])
    render :show
  end

  def create
    @video = Video.new(video_params)
    if @video.save
      render :show
    else
      render json: @video.errors.full_messages, status: 422
    end
  end

  def update
    @video = Video.find(params[:id])
    if @video.update(video_params)
      render :show
    else
      render json: @video.errors.full_messages, status: 422
    end
  end

  def destroy
    @video = Video.find(params[:id])
    @video.destroy
    # may not work, how is it going to show after deleting?
    render :show
  end

  private
  def video_params
    params.require(:video).permit(:title, :description)
  end
end
