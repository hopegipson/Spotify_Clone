class PlaylistSongsController < ApplicationController
    def index
        playlistsongs = PlaylistSong.all
        render json: PlaylistSongsSerializer.new(playlistsongs).to_serialized_json
    end

    def destroy
        playlistsong = PlaylistSong.find_by(id: params[:id])
        playlistsong.destroy
        playlistsongs = PlaylistSong.all
        render json: PlaylistSongSerializer.new(playlistsongs).to_serialized_json
    end

end