class SongSerializer < ActiveModel::Serializer
  def initialize(song_object)
    @song = song_object
  end
 
  def to_serialized_json
    @song.to_json(:include => { :playlists => {:only => [:id, :name, :image]},
    }, :except => [:updated_at, :created_at, :album])
  end
end
