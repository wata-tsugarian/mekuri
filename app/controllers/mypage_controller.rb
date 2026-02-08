class MypageController < ApplicationController
  before_action :authenticate_user!

  def show
    render inertia: "mypage/index"
  end

  def edit
    render inertia: "mypage/edit", props: { user: current_user }
  end

  def update
    if current_user.update(user_params)
      redirect_to mypage_path, notice: "ユーザーを更新しました。"
    else
      redirect_back fallback_location: edit_mypage_path, inertia: { errors: current_user.errors }
    end
  end

  private

  def user_params
    params.require(:user).permit(:name)
  end
end
