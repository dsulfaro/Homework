import React from 'react';
import ReactDOM from 'react-dom';

import Note from './util/note.js';

import configureStore from './store/store';
import Root from './components/root';

// const addLoggingToDispatch = store => next => action => {
//   console.log(action);
//   console.log(store.getState());
//   let result = next(action);
//   console.log(store.getState());
//   return result;
// }
//
// function applyMiddlewares(store) {
//   let dispatch = store.dispatch;
//   let mws = Array.from(arguments).slice(1);
//   mws.forEach( m => {
//     dispatch = m(store)(dispatch);
//   });
//   return Object.assign({}, store, { dispatch });
// }

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  // const newStore = applyMiddlewares(store, addLoggingToDispatch);
  const rootEl = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, rootEl);
});
