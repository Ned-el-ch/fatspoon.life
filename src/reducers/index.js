import { combineReducers } from 'redux';
import recipes from './recipes';
import ingredients from './ingredients';
import search from './search';

export default combineReducers({
	recipes,
	ingredients,
	search
});