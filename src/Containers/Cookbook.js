import React from 'react';
import { connect } from 'react-redux';
import { starRecipe, unstarRecipe } from '../Actions/recipes';

import RecipeCard from '../Components/RecipeCard.js';
import PageHeader from '../Components/PageHeader.js';
import RecipeFormContainer from './RecipeFormContainer.js';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const createLabels = (recipe, ingredients) => {
	let availableIngredients = [];
	recipe.ingredients.forEach(ri => {
		let ing = ingredients.find(i => i.id === ri.id);
		if (ing)
			availableIngredients.push(ing);
	});
	let labels = {
		missingIngredients: recipe.ingredients.length - availableIngredients.length,
		vegetarian: true
	};
	return labels;
}

const generateLink = recipe => {
	let link = "Recipes/" + recipe.info.title.split(" ").slice(0, 3).join("-")
	link += "-" + recipe.id.split("-")[0];
	return link
}

const Cookbook = (props) => {
	const { recipes, ingredients, starRecipe, unstarRecipe } = props;
	return (
		<div className="cookbook-container">
			<PageHeader title="My Cookbook"/>
			<RecipeFormContainer />
			<Row>
			<Col xs={12} sm={12} md={{ span: 10, offset: 1}} lg={{ span: 10, offset: 1}} className="rf-remove-margin">
				{recipes.map(recipe => 
					<RecipeCard
						key={recipe.id}
						recipe={recipe}
						starRecipe={starRecipe}
						unstarRecipe={unstarRecipe}
						labels={createLabels(recipe, ingredients)}
						link={generateLink(recipe)}
					/>
				)}
			</Col>
			</Row>
		</div>
	)
}

const mapStateToProps = state => {
	return ({
		recipes: state.recipes,
		ingredients : state.ingredients
	})
};

export default connect(mapStateToProps, { starRecipe, unstarRecipe })(Cookbook);