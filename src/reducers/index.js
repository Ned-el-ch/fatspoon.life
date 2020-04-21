import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import recipes from './recipes';
import ingredients from './ingredients';

export default (history) => combineReducers({
	recipes,
	ingredients,
	router: connectRouter(history)
});