class PlaylistsController < ApplicationController
    def index
        playlists = Playlist.all
        render json: PlaylistSerializer.new(playlists).to_serialized_json
    end

    def create
        selectedNumber = Playlist.all.last.id
        playlist = Playlist.create(name: "My Playlist ##{selectedNumber}", image: "https://i.pinimg.com/originals/7e/4f/89/7e4f892475aca7242883ceaf8aa89cc9.jpg", user: User.all.find_by(id: playlist_params[:user_id]))
        render json: PlaylistSerializer.new(playlist).to_serialized_json
      end

      def show
        playlist = Playlist.find(params[:id])
        render json: PlaylistSerializer.new(playlist).to_serialized_json
      end
    
    def update
        playlist = Playlist.find_by(id: params[:id])
        playlist.name = playlist_params[:name]
        playlist.image = playlist_params[:image]
        playlist.save
        render json: PlaylistSerializer.new(playlist).to_serialized_json
    end

    def destroy
      playlist = Playlist.find_by(id: params[:id])
      playlist.destroy
      playlists = Playlist.all
      render json: PlaylistSerializer.new(playlists).to_serialized_json
    end


private
  def find_playlist
    @playlist = Playlist.find_by(id: params[:id])
  end


  def playlist_params
    params.require(:playlist).permit(:name, :image, :user_id)
  end
end
