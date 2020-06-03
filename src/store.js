import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './Reducers/index';
import { composeWithDevTools } from 'redux-devtools-extension';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const enhancer = composeEnhancers(
//   applyMiddleware(thunkMiddleware)
// );
const store = createStore(
	rootReducer,
	composeWithDevTools(
		applyMiddleware(
			thunk
		)
	)
);

export default store;