import React from 'react';
import ReactDOM from 'react-dom/client';
//to access the store from anywhere in the app
import { Provider } from 'react-redux';
import {legacy_createStore as createStore, applyMiddleware, compose} from 'redux';
//to work with promises
import thunk from 'redux-thunk';
//to change state in redux
import reducers from './reducers' 
import App from './App';
//the store of the app
const store = createStore(reducers, compose(applyMiddleware(thunk)))
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    //wrap the app with the provider component
  <React.StrictMode>
    <Provider store={store}>
       <App />
    </Provider>,
    
    
  </React.StrictMode>
);
