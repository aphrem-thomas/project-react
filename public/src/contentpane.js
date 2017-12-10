import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import About from './about.js';
import Contact from './contact.js';
import Photos from './photos.js';
import Home from './home.js';
import Me from './Me.js'
import Todo from './Todo.js';
class ContentPane extends React.Component{
    render(){
        return(
            <div>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route exact path='/about' component={About}/>
                        <Route exact path='/contact' component={Contact}/>
                        <Route exact path='/photos' component={Photos}/>
                        <Route exact path='/todoapp' component={Todo}/>
                    </Switch>
            </div>
        );
    }
}

export default ContentPane;