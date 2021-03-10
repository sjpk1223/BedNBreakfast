class Api::UsersController < ApplicationController

    def create
        @user = User.new(user_params)
        # debugger
        if @user.save
            login!(@user)
            render "api/users/show"
        else
            # debugger
            render json: @user.errors.full_messages, status: 422
        end
    end

    private
    def user_params
        params.require(:user).permit(:username, :password)
    end
end
