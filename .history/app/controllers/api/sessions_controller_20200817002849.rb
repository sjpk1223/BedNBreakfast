class Api::SessionsController < ApplicationController
    protect_from_forgery with: :null_session
    
    def create
        @user = User.find_by_credentials(
            params[:user][:username],
            params[:user][:password]
        )

        if @user
            login!(@user)
            render "/api/users/show"
        else
            render json: ["Invalid username or password"], status: 401
        end
    end
    
    def destroy 
        @user = @current_user
        if @user
         logout!
        render "api/users/show"
        else
        render json: ["Please log in"], status: 404
        end
    end

end