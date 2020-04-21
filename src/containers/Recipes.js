import React, { Component } from 'react';
import { connect } from 'react-redux';
import RecipeCard from '../components/RecipeCard';
import { removeRecipe, starRecipe, unstarRecipe } from '../actions/recipes';

class Recipes extends Component {

	render() {
		const { recipes, removeRecipe, starRecipe, unstarRecipe } = this.props;
		return (
			<div>
				<hr />
				<div className="row justify-content-center">
					<h2>Recipes</h2>
				</div>
				<hr />
				<div className="container">
					<div className="row">
						<div className="col-md-4">
							{recipes.map(recipe => 
								<RecipeCard
									key={recipe.id}
									recipe={recipe}
									starRecipe={starRecipe}
									unstarRecipe={unstarRecipe}
									removeRecipe={removeRecipe}
								/>
							)}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return ({
		recipes: state.recipes
	})
};

export default connect(mapStateToProps, { removeRecipe, starRecipe, unstarRecipe })(Recipes);