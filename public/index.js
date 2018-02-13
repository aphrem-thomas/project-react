import React from 'react';
import ReactDom from 'react-dom';
import App from './src/App.js';
import {Provider} from 'react-redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
//import {store} from './src/reduxStore.js';
import {combineReducers, applyMiddleware} from 'redux';
import {createStore} from 'redux';
import {thereducer} from './src/thereducer.js';
import {Bootstrap} from 'bootstrap';
import thunk from 'redux-thunk';
import {apiReducer} from './src/apireducer.js';
import{get_courses} from './src/actionCreator/actionCreator.js';
const redus=combineReducers({TodoReducer:thereducer, CourseReducer:apiReducer});

var store=createStore(
    redus,
    applyMiddleware(thunk,reduxImmutableStateInvariant()) //this middleware will detect mutation and remember to delete when under porduction
);
//store.dispatch(get_courses());
ReactDom.render(
    <Provider store={store}>
        <App/>
    </Provider>
    ,document.getElementById("theapp"));