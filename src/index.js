import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.css';
import * as serviceWorker from './serviceWorker';

import App from './containers/App';
// import { createStore } from 'redux'
// import rootReducer from './reducers/index'
import { Provider } from 'react-redux';
import store from "./store"

// let store = createStore(rootReducer)

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>,
	</React.StrictMode>,
	document.getElementById('root')
);

serviceWorker.unregister();