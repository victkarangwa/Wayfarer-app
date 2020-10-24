import React from 'react';
import { 
    BrowserRouter as Router, 
    Route, 
    Link, 
    Switch 
} from 'react-router-dom';


const landing = props => {

    return (
        <div className="home-page">
            <ul className="App-header"> 
              <li> 
                <Link to="/">Home</Link> 
              </li> 
              <li> 
                <Link to="/login">Login</Link> 
              </li> 
            </ul> 
        </div>
    )
}
export default landing;
