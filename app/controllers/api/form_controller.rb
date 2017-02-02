class Api::FormController < ApplicationController
  def show
    user = User.find(params[:token])
    render json: user.load_form_order
  end
end
