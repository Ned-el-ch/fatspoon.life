import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import * as serviceWorker from './serviceWorker';
import { unregister } from './serviceWorker';

import 'bootstrap/dist/css/bootstrap.min.css'
import './Styles/index.css';

import store from './store'

import App from './Containers/App.js';


ReactDOM.render(
	// <React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>,
	// </React.StrictMode>,
	document.getElementById('root')
)

unregister();