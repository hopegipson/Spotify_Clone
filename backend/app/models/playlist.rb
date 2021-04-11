class Playlist < ApplicationRecord
    has_many :playlist_songs, :dependent => :destroy
    belongs_to :user
    has_many :playlist_songs
    has_many :songs, through: :playlist_songs
end
