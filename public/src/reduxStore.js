import {createStore} from 'redux';
import {thereducer} from './thereducer.js';

var store=createStore(thereducer);

export default store;