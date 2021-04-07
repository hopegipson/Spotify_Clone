class PlaylistSongsSerializer < ActiveModel::Serializer
    def initialize(playlist_song_object)
      @playlistsong = playlist_song_object
    end
   
    def to_serialized_json
      @playlistsong.to_json(:include => { :song => {:only => [:id, :name, :uri, :duration_ms, :artist, :album, :album_artwork]},
      :playlist => {:only => [:id, :name, :image]}})
    end
  end
  