import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Main from './Main.js';

class App extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <Main/>      
            </BrowserRouter>
        );
    }
}

export default App;