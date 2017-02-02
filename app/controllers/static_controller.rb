class StaticController < ApplicationController
  def root
    @token = params[:token]
  end
end
