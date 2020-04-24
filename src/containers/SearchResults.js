import React, { Component } from 'react'
import { PageHeader } from '../components/PageHeader'
import { connect } from 'react-redux'
import { starRecipe, unstarRecipe } from '../actions/recipes';
import RecipeCard from '../components/RecipeCard';

class SearchResults extends Component {
	render() {
		const { recipes, starRecipe, unstarRecipe } = this.props;

		return (
			<div className="search-results-container">
				<PageHeader title="Search Results"/>
				{recipes.map(recipe => 
						<RecipeCard
							key={recipe.id}
							recipe={recipe}
							starRecipe={starRecipe}
							unstarRecipe={unstarRecipe}
						/>
				)}
			</div>
		)
	}
}

let mapStateToProps = (state) => {
	return(
		{
			recipes: state.search.recipes
		}
	)
}

export default connect(mapStateToProps, {starRecipe, unstarRecipe})(SearchResults);