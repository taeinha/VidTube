class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      log_in!(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422 # May need to flesh out
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :email, :password)
  end
end
