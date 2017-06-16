class ApplicationController < ActionController::Base
  #protect_from_forgery with: :exception
  before_action :configure_permitted_parameters, if: :devise_controller?
  #skip_before_action :verify_authenticity_token

  respond_to :json

  def index
    render 'application/index'
  end

  private

  def configure_permitted_parameters
    added_attrs = [:email, :password, :password_confirmation, :remember_me]
    devise_parameter_sanitizer.permit :sign_up, keys: added_attrs
    devise_parameter_sanitizer.permit :account_update, keys: added_attrs
  end
  #
  # def restrict_access
  #   unless restrict_access_by_header || restrict_access_by_params
  #     render json: {message: 'Invalid API Token'}, status: 401
  #     return
  #   end
  # end
  #
  # def restrict_access_by_header
  #   authenticate_with_http_token do |token|
  #     if token!=nil
  #       @current_user = User.where(:token => token).first
  #     end
  #   end
  #   if @current_user then return true else return false end
  # end
  #
  # def restrict_access_by_params
  #   @current_user = User.where(:token => params[:token]).first
  #   return true if @current_user && params[:token]!=nil
  # end


end
