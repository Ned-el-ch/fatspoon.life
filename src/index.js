import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';

import './Styles/index.css';

import store from './store'

import App from './containers/App';
import Recipes from './containers/Recipes';
import NavbarContainer from './containers/NavbarContainer';

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<Router>
				<NavbarContainer />
				<Switch>
					<Route exact path="/" component={App} />
					<Route component={Recipes} />
				</Switch>
			</Router>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
)

serviceWorker.unregister();