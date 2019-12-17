class Api::CommentsController < ApplicationController
  def index
    @video = Video.find(params[:video_id])
    @comments = @video.comments
    render :index
  end

  def create
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id
    if @comment.save
      render json: @comment, status: 200
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def update
    @comment = current_user.comments.find(params[:id])
    if @comment.update(comment_params)
      render json: @comment, status: 200
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def destroy
    @comment = current_user.comments.find(params[:id])
  end

  private

  def comment_params
    params.require(:comment).permit(:body, :video_id)
  end
end
