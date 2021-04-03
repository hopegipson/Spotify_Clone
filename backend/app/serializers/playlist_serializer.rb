class PlaylistSerializer < ActiveModel::Serializer
  def initialize(playlist_object)
    @playlist = playlist_object
  end
 
  def to_serialized_json
    @playlist.to_json(:include => { :user => {:only => [:id, :display_name, :spotifyid]},
    :songs => {:only => [:id, :name, :uri, :duration_ms, :artist, :album_artwork]}
  },:except => [:updated_at, :created_at])
  end
end
