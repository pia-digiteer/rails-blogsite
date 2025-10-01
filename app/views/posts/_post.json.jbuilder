json.extract! post, :id, :title, :body, :likes, :shares, :created_at, :updated_at
json.url post_url(post, format: :json)
