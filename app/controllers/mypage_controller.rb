class MypageController < ApplicationController
  before_action :authenticate_user!

  def index
    render inertia: "mypage/index"
  end
end