class Api::SessionsController < ApplicationController
  # used to verify email
  def email 
    user = User.find_by_email(params[:email])
    if user.nil?
      render json: ['Email not found!'], status: 422
    else
      render json: {validEmail: true}, status: 200
    end
  end
  
  # controller action for logging in
  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )
    if @user.nil?
      render json: ['Invalid User Credentials'], status: 422
    else
      log_in!(@user)
      render 'api/users/show'
    end
  end

  def destroy
    if !logged_in?
      render json: ['You are not logged in!'], status: 422
    else
      log_out!
      render json: {}
    end
  end
end
