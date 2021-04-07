class PlaylistSerializer < ActiveModel::Serializer
  def initialize(playlist_object)
    @playlist = playlist_object
  end
 
  def to_serialized_json
    @playlist.to_json( include: {playlist_songs: {include: :song}},
    :user => {:only => [:id, :display_name, :spotifyid]},
    :songs => {:only => [:id, :name, :uri, :duration_ms, :artist, :album, :album_artwork]}, :playlist_songs => {:only => [:id, :playlist_id, :song_id, :created_at]}, 
  )
  end
end
