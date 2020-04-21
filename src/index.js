import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './Styles/index.css';

import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router' // react-router v4/v5
import { ConnectedRouter } from 'connected-react-router'
import configureStore, { history } from './store'

import App from './containers/App';
import Recipes from './containers/Recipes';

const store = configureStore(); // add any test store here i guess

ReactDOM.render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<Switch>
				<Route exact path="/" component={App} />
				<Route component={Recipes} />
			</Switch>
		</ConnectedRouter>
	</Provider>,
	document.getElementById('root')
)

serviceWorker.unregister();