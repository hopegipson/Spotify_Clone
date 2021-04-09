import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import musicReducer from './reducers/musicReducer.js';
import { combineReducers } from "redux";
import albumsReducer from './reducers/albumsReducer';
import tokenReducer from './reducers/tokenReducer';
import songsReducer from './reducers/songsReducer';
import artistsReducer from './reducers/artistsReducer';
import playbackOnReducer from './reducers/playbackOnReducer';
import playbackPausedReducer from './reducers/playbackPaused';
import songPlayingReducer from './reducers/songPlayingReducer';
import playerReducer from './reducers/playerReducer';
import deviceReducer from './reducers/deviceReducer';
import recSongsReducer from './reducers/recSongsReducer';
import recSongsloadingReducer from './reducers/recSongsloadingReducer';
import recPlayedSongsReducer from './reducers/recPlayedSongs';
import recPlayedloadingReducer from './reducers/recPlayedloadingReducer';
import recArtistsReducer from './reducers/recArtistsReducer';
import recArtistsloadingReducer from './reducers/recArtistsloadingReducer';
import userReducer from './reducers/userReducer';
import spotifyUserReducer from './reducers/spotifyUserReducer';
import playlistsReducer from './reducers/playlistsReducer';
import selectedPlaylistReducer from './reducers/selectedPlaylistReducer';
import busyReducer from './reducers/busyReducer';

//go to combine reducers documentation and create these
const rootReducer = combineReducers({
  albums: albumsReducer,
  token: tokenReducer,
  songs: songsReducer,
  artists: artistsReducer,
  playbackOn: playbackOnReducer,
  playbackPaused: playbackPausedReducer,
  songPlaying: songPlayingReducer,
  player: playerReducer,
  deviceID: deviceReducer,
  recSongs: recSongsReducer,
  recSongsloading: recSongsloadingReducer,
  recPlayedSongs: recPlayedSongsReducer,
  recPlayedloading: recPlayedloadingReducer,
  recArtists: recArtistsReducer,
  recArtistsloading: recArtistsloadingReducer,
  user: userReducer,
  spotifyuser: spotifyUserReducer,
  playlists: playlistsReducer,
  selectedPlaylist: selectedPlaylistReducer,
  loading: busyReducer
 })

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  musicReducer,
  composeEnhancer(applyMiddleware(thunk)),
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
); 

