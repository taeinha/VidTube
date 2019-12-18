class Api::CommentsController < ApplicationController
  def index
    @video = Video.find(params[:video_id])
    # @comments = @video.comments.includes(:likes)
    @comments = @video.comments.includes(:user, :likes)
    # @current_user_likes = Like.all.where(user_id: current_user.id, likable_type: "Comment")
    # left_outer_joins(:likes).includes(:user, :likes)
    # includes(:user, likes: :is_like)
    # @comment_like_counts = @video.comments.joins(:likes).group(:is_like)
    @comment_count = @video.comments.count
    render :index
  end

  def create
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id
    if @comment.save
      @video = Video.find(@comment.video_id)
      @comment_count = @video.comments.count
      @like = @comment.likes.find_by(user_id: current_user.id)
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def update
    @comment = current_user.comments.find(params[:id])
    if @comment.update(comment_params)
      @video = Video.find(@comment.video_id)
      @comment_count = @video.comments.count
      @like = @comment.likes.find_by(user_id: current_user.id)
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def destroy
    @comment = current_user.comments.find(params[:id])
    @comment.destroy
    @video = Video.find(@comment.video_id)
    @comment_count = @video.comments.count
    render :show
  end

  def create_like
    @like = Like.new(like_params)
    @like.user_id = current_user.id
    if @like.save
      @comment = Comment.find(@like.likable_id)
      @video = Video.find(@comment.video_id)
      @comment_count = @video.comments.count
      render :show
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

  def destroy_like
    @like = Like.find_by(user_id: current_user.id, 
                        likable_id: params[:comment_id],
                        likable_type: "Comment")
    @like.destroy
    @comment = Comment.find(@like.likable_id)
    @video = Video.find(@comment.video_id)
    @comment_count = @video.comments.count
    @like = nil
    render :show
  end

  private

  def comment_params
    params.require(:comment).permit(:body, :video_id)
  end

  def like_params
    params.require(:like).permit(:is_like, :likable_type, :likable_id)
  end
end
