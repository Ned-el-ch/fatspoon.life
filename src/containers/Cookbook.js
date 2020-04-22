import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeRecipe, starRecipe, unstarRecipe } from '../actions/recipes';

import RecipeCard from '../components/RecipeCard';
import { PageHeader } from '../components/PageHeader';
import Row from 'react-bootstrap/Row';

class Cookbook extends Component {

	render() {
		const { recipes, removeRecipe, starRecipe, unstarRecipe } = this.props;
		return (
			<div className="cookbook-container">
				<PageHeader title="My Cookbook"/>
				<Row className="align-self-start justify-content-center">
					{recipes.map(recipe => 
						<RecipeCard
							key={recipe.id}
							recipe={recipe}
							starRecipe={starRecipe}
							unstarRecipe={unstarRecipe}
							removeRecipe={removeRecipe}
						/>
					)}
				</Row>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return ({
		recipes: state.recipes
	})
};

export default connect(mapStateToProps, { removeRecipe, starRecipe, unstarRecipe })(Cookbook);