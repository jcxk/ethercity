import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import { createStore, combineReducers, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
import App from "./container/App";
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
// ------------
// reducer
// ------------

const initialStateCityReducer = {
   objects: []
}

function cityReducer(state = initialStateCityReducer, action) {
  switch (action.type) {
  case 'ADD_HOUSE':
      console.log(state);
      let x =  state.objects;
      x.push(action.payload);
      console.log(x);
      return  {
                   ...state,
                      objects: [action.payload]
                 }
  case 'FETCH_CITY':
    return {
      ...state,
         objects: [
 //        {asset_name: 'house1', eth_addr: 'asdfaf', pos:{x: 0, y: 0, z: 0}}
         ]
    }
  default:
    return state;
  }
}

// --------------
// action creators
// --------------


function fetchCity() {
  return {
    type: 'FETCH_CITY'
  };
}



// ------------
// app
// ------------

import { reducer as formReducer } from 'redux-form';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers({ form: formReducer, app: cityReducer });
const store = createStoreWithMiddleware(reducer);

store.dispatch(fetchCity());
ReactDOM.render(<Provider store={store}><App /></Provider>, document.querySelector('#sceneContainer'));
