import React from 'react';
import {BrowserRouter,Route} from 'react-router';
import NavBar from './navbar.js';
import ContentPane from './contentpane.js'

class Main extends React.Component{
    render(){
        return(
            <div>
                <NavBar/>
                <ContentPane/>
            </div>
        );
    }
}

export default Main;