
import React from 'react';
import ReactDom from 'react-dom';
import App from './src/App.js';
import {Provider} from 'react-redux';
//import {store} from './src/reduxStore.js';
import {combineReducers} from 'redux';
import {createStore} from 'redux';
import {thereducer} from './src/thereducer.js';
import {Bootstrap} from 'bootstrap';
const redus=combineReducers({theredu:thereducer});
var store=createStore(redus);
ReactDom.render(
    <Provider store={store}>
        <App/>
    </Provider>
    ,document.getElementById("theapp"));