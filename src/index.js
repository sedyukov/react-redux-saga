import React from 'react';
import {render} from 'react-dom';
import App from './App';
import thunk from 'redux-thunk'
import reportWebVitals from './reportWebVitals';
import {applyMiddleware, compose, createStore} from "redux";
import {rootReducer} from "./redux/rootReducer";
import {Provider} from 'react-redux';
import {forbiddenWordsMiddleware} from "./redux/middleware";
const store = createStore(rootReducer, compose(
    applyMiddleware(thunk, forbiddenWordsMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

render(
   <Provider store={store}>
       <App />
   </Provider>
    , document.getElementById('root')
);

reportWebVitals();
