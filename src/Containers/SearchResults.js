import React from 'react'
import PageHeader from '../Components/PageHeader.js';
import { connect } from 'react-redux'
import { starRecipe, unstarRecipe } from '../Actions/recipes';
import RecipeCard from '../Components/RecipeCard.js';

const SearchResults = (props) => {
	const { recipes, starRecipe, unstarRecipe } = props;
	return (
		<div className="search-results-container">
			<PageHeader title="Search Results"/>
			{recipes.map(recipe => 
				<RecipeCard
					key={recipe.uri}
					recipe={recipe}
					starRecipe={starRecipe}
					unstarRecipe={unstarRecipe}
				/>
			)}
		</div>
	)
}


let mapStateToProps = (state) => {
	return ({
		recipes: state.search.recipes
	})
}

export default connect(mapStateToProps, {starRecipe, unstarRecipe})(SearchResults);
