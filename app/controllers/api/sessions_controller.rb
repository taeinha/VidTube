class Api::SessionsController < ApplicationController
  # controller action for logging in
  def create
    @user = User.find_by_credentials(
      email: params[:user][:email],
      password: params[:user][:email]
    )
    if @user.nil?
      render json: ['Invalid User Credentials'], status: 422
    else
      log_in!(@user)
      render 'api/users/show'
    end
  end

  def destroy
    @user = User.find(params[:id])
    if !logged_in?
      render json: ['You are not logged in!'], status: 422
    else
      log_out!
      render 'api/users/show'
    end
  end
end
