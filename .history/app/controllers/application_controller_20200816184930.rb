class ApplicationController < ActionController::Base
helper_method :logged_in?, :current_user, :ensure_logged_in

    def current_user
        @current_user ||= User.find_by(session_token: session[:session_token])
    end
    def ensure_logged_in
        redirect_to new_session_url unless logged_in?
    end
    def logged_in?
        !!current_user
    end
    def login!(user)
        session[:session_token] = user.reset_session_token!
        @current_user = user
    end
    def logout!
        current_user.reset_session_token!
        session[:session_token] = nil
        @current_user = nil
    end
end

class ApplicationController < ActionController::Base
    helper_method :ensure_logged_in, :logged_in?, :current_user
    def current_user
        @current_user ||= User.find_by(session_token: session[:session_token])
    end
    def ensure_logged_in
        unless logged_in?
            render json: ["Not logged in!"], status: 401
        end
    end
    def login!(user)
        session[:session_token] = user.session_token
        @current_user = user 
    end
    def logged_in?
        !!current_user
    end
    def logout!
        current_user.reset_session_token
        session[:session_token] = nil
        @current_user = nil
    end
end
