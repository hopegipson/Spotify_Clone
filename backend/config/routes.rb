Rails.application.routes.draw do
  resources :user_songs
  resources :playlist_songs
  resources :songs
  resources :playlists
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
