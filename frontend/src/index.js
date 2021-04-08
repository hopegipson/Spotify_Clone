import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import musicReducer from './reducers/musicReducer.js';
import { combineReducers } from "redux";

//go to combine reducers documentation and create these
// const rootReducer = combineReducers({
//   books: booksReducer,
//   authors: authorsReducer
// })

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

