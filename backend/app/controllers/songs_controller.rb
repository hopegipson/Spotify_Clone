class SongsController < ApplicationController
    
    def create
        song = Song.new(name: song_params[:name], uri: song_params[:uri], duration_ms: song_params[:duration_ms], artists: song_params[:artists], album: song_params[:album].to_h)
        if song_params[:second_playlist_id]
          song.playlists << Playlist.all.find_by(id: song_params[:second_playlist_id])
        end
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
        if song_params[:playlist_id]
        playlist = Playlist.find_by(id: song_params[:playlist_id])
        song.playlists << playlist
        elsif song_params[:remove_playlist_id]
          song.playlists.delete(song_params[:remove_playlist_id])
        end
        song.save
        render json: SongSerializer.new(song).to_serialized_json
      end

      def destroy
        song = Song.find_by(id: params[:id])
        song.destroy
        songs = Song.all
        render json: SongSerializer.new(songs).to_serialized_json
      end
      
      private

      def song_params
        params.require(:song_info).permit(:name, :uri, :duration_ms, :playlist_id, :remove_playlist_id, :second_playlist_id, artists: [:href, :id, :name, :type, :uri, external_urls: [:spotify],], album: {})
      end




      
 
end
