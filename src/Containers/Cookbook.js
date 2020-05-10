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
	recipe.recipe_ingredients.forEach(ri => {
		let ing = ingredients.find(i => i.uuid === ri.uuid && i.weight >= ri.weight);
		if (ing)
			availableIngredients.push(ing);
	});
	let labels = {
		missingIngredients: recipe.recipe_ingredients.length - availableIngredients.length,
		vegetarian: true
	};
	return labels;
}

const generateLink = recipe => {
	let link = "Recipes/" + recipe.title.split(" ").slice(0, 4).join("-")
	link += "-" + recipe.uuid;
	return link
}

const Cookbook = (props) => {
	const { recipes, ingredients, starRecipe, unstarRecipe } = props;
	return (
		<div className="content cookbook-container">
			<PageHeader title="My Cookbook"/>
			<div className="content--inner">
			<RecipeFormContainer />
			<Row>
			<Col xs={12} sm={12} md={{ span: 10, offset: 1}} lg={{ span: 10, offset: 1}} className="rf-remove-margin">
				{recipes.map(recipe => 
					<RecipeCard
						key={recipe.uuid}
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