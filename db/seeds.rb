# Clear existing data to avoid duplicates
Post.destroy_all

# Seeding script
48.times do
  # prevent duplicate seeds
  Post.find_or_create_by!(
    # get and store unique content for posts
    body: Faker::Lorem.unique.paragraph(sentence_count: rand(1..3)),
    likes: rand(1..1000),
    shares: rand(1..100),
  )
end

# clear UniqueGenerator to preserve future seeds
Faker::UniqueGenerator.clear
