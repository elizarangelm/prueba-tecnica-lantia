import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';

import Home from './componentes/home/Home';
import Login from './componentes/login/Login';
import Menu from './componentes/menu/Menu';
import Registro from './componentes/registro/Registro';

import * as serviceWorker from './serviceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; // Archivo CSS de Bootstrap 4 
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'; 
ReactDOM.render(
    <Router>
	    <div>
	    	<Switch>
 
		        {/* Páginas */}
		        <Route exact path='/' component={Home} />
		        <Route path='/login' component={Login} />
		        <Route path='/registro' component={Registro} /> 
		        <Route path='/menu' component={Menu} /> 
 
	      	</Switch>
	    </div>
    </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();