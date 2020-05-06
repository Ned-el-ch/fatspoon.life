import { combineReducers } from 'redux';
import user from './user';
import recipes from './recipes';
import ingredients from './ingredients';
import search from './search';

export default combineReducers({
	user,
	recipes,
	ingredients,
	search
});
