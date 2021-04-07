class UserSerializer < ActiveModel::Serializer
  def initialize(user_object)
    @user = user_object
  end
 
  def to_serialized_json
    @user.to_json(include: {playlists: {include: :songs, :except => [:updated_at, :created_at]}}, :except => [:updated_at, :created_at])
  end
end
