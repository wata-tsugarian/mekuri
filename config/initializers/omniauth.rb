Rails.application.config.middleware.use OmniAuth::Builder do
  provider :google_oauth2,
    Rails.application.credentials.dig(:google, :client_id),
    Rails.application.credentials.dig(:google, :client_secret),
    {
      # 取得する情報（メール、プロフィール）
      scope: "email, profile",
      # ログイン後のリダイレクト時の画像サイズ指定など
      image_aspect_ratio: "square",
      image_size: 50
    }
end
