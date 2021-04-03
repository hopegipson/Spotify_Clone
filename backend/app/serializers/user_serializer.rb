class UserSerializer < ActiveModel::Serializer
  def initialize(user_object)
    @user = user_object
  end
 
  def to_serialized_json
    @user.to_json(:include => {
      :playlists => {:only => [:id, :name, :image]},
    }, :except => [:updated_at, :created_at])
  end
end
