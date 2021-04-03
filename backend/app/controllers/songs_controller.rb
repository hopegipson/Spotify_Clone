class SongsController < ApplicationController
    
    def create
        #when you create one if you don't have a playlist id make it 0
        song = Song.new(name: song_params[:name], uri: song_params[:uri], duration_ms: song_params[:duration_ms], artist: song_params[:artist], album_artwork: song_params[:album_artwork])
        song.playlists << Playlist.all.find_by(id: song_params[:playlist_id])
        song.save
        render json: SongSerializer.new(song).to_serialized_json
      end


    def index
        songs = Song.all
        render json: SongSerializer.new(songs).to_serialized_json
      end

      def show
        song = Song.find(params[:id])
        render json: SongSerializer.new(song).to_serialized_json
      end

      def update
        song = Song.find_by(id: params[:id])
        playlist = Playlist.find_by(id: song_params_change[:playlist_id])
        song.playlists << playlist
        song.save
        render json: SongSerializer.new(song).to_serialized_json
      end

      def destroy
        song = Song.find_by(id: params[:id])
        playlist = Playlist.find_by(id: song_params_change[:playlist_id])
        song.playlists.delete(playlist)
        song.save
      end
      
      private

      def song_params
        params.require(:song_info).permit(:name, :uri, :duration_ms, :artist, :album_artwork, :playlist_id)
      end

      def song_params_change
        params.require(:user_info_score).permit(:house_id)
      end

      
 
end
