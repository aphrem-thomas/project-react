
import React from 'react';
import ReactDom from 'react-dom';
import App from './src/App.js';
import {Provider} from 'react-redux';
//import {store} from './src/reduxStore.js';
import {createStore} from 'redux';
import {thereducer} from './src/thereducer.js';
import {Bootstrap} from 'bootstrap';
var store=createStore(thereducer);
ReactDom.render(
    <Provider store={store}>
        <App/>
    </Provider>
    ,document.getElementById("theapp"));