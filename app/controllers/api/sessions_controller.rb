class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user
      login(@user)
      render :show
    else
      render json: { errors: "invalid username/password" }, status: 422
    end
  end

  def destroy
    if current_user
      logout
      render json: {}
    else
      render json: { errors: "no user to logout!" }, status: 422
    end
  end
end
