class Song < ApplicationRecord
    has_many :playlist_songs
    has_many :playlists, through: :playlist_songs
    serialize :album, Hash
    serialize :artists, Array
end
