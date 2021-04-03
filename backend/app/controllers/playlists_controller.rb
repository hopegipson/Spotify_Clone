class PlaylistsController < ApplicationController
    def index
        playlists = Playlist.all
        render json: PlaylistSerializer.new(playlists).to_serialized_json
    end

    def create
        playlist = Playlist.create(name: playlist_params[:name], image: playlist_params[:image], user: User.all.find_by(playlist_params[:user_id]))
        render json: PlaylistSerializer.new(playlist).to_serialized_json
      end
    
    def update
        playlist = Playlist.find_by(id: params[:id])
        playlist.name = playlist_params[:name]
        playlist.image = playlist_params[:image]
    end

    def destroy
        playlist = Playlist.find_by(id: params[:id])
        playlist.song.each { |song| 
        song.playlists.delete(playlist)
        song.save
        }
        #for all songs delete this playlist from their playlists
        playlist.destroy
    end


private
  def find_playlist
    @playlist = Playlist.find_by(id: params[:id])
  end

  def playlist_params
    params.require(:playlist).permit(:name, :image, :user_id)
  end
end
