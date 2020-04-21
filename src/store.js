import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import rootReducer from './reducers/index';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const history = createBrowserHistory();

export default function configureStore(preloadedState) {
	const store = createStore(
		rootReducer(history),
		preloadedState,
		composeEnhancer(
			applyMiddleware(
				routerMiddleware(history)
			)
		)
	)
	return store;
}