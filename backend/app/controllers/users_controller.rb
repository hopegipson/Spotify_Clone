class UsersController < ApplicationController
    def create
        user = User.create(display_name: user_params[:display_name], spotifyid: user_params[:spotifyid])
        Playlist.create(name: "User Library", image: "https://i.pinimg.com/originals/7e/4f/89/7e4f892475aca7242883ceaf8aa89cc9.jpg", user: user)
        render json: UserSerializer.new(user).to_serialized_json
      end


    def index
        users = User.all
        render json: UserSerializer.new(users).to_serialized_json
      end

      def show
        user = User.find(params[:id])
        render json: UserSerializer.new(user).to_serialized_json
      end

      def update
        user = User.find_by(id: params[:id])
        user.display_name = user_params[:display_name]
        user.save
        render json: UserSerializer.new(user).to_serialized_json
      end

      private

      def user_params
        params.require(:user_info).permit(:display_name, :spotifyid)
      end
 
end
