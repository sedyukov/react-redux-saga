import React from 'react';
import {render} from 'react-dom';
import App from './App';
import thunk from 'redux-thunk'
import reportWebVitals from './reportWebVitals';
import {applyMiddleware, compose, createStore} from "redux";
import {rootReducer} from "./redux/rootReducer";
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga'
import {forbiddenWordsMiddleware} from "./redux/middleware";
import {sagaWatcher} from './redux/sagas'

const saga = createSagaMiddleware()

const store = createStore(rootReducer, compose(
    applyMiddleware(thunk, forbiddenWordsMiddleware, saga),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

saga.run(sagaWatcher)

render(
   <Provider store={store}>
       <App />
   </Provider>
    , document.getElementById('root')
);

reportWebVitals();
