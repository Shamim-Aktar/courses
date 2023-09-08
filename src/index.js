import React from 'react';
import {render} from 'react-dom'
import {BrowserRouter as Router} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import "./index.css"
import App from './components/App';
//import ReactDOM from 'react-dom/client';

function Hi(){
    return <h1>hi</h1>
}

render(
<Router>
    <App/>
</Router>, 
document.getElementById('app'))

