class PlaylistSongsController < ApplicationController
    def index
        playlistsongs = PlaylistSong.all
        render json: PlaylistSongsSerializer.new(playlistsongs).to_serialized_json
    end

end