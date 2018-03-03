import React from 'react';
import {BrowserRouter,Route} from 'react-router';
import NavBar from './navbar.js';
import ContentPane from './contentpane.js'

class Main extends React.Component{
    render(){
        return(
            <div>
                <div id="navigation">
                    <NavBar/>
                </div>
                <div id="contentpane">
                    <ContentPane/>
                </div>
            </div>
        );
    }
}

export default Main;