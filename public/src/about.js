import React from 'react';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import Me from './Me.js';
class About extends React.Component{
    render(){
        return(
            <div>
                
                <BrowserRouter>
                    <div>
                        <h2>this is about</h2>
                        <Link to='/about/me'>me</Link>
                        <Route exact path='/about/me' component={Me}/>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default About;