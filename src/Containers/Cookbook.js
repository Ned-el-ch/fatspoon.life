import React from 'react';
import { connect } from 'react-redux';
import { starRecipe, unstarRecipe } from '../Actions/recipes';

import RecipeCard from '../Components/RecipeCard.js';
import PageHeader from '../Components/PageHeader.js';
import RecipeFormContainer from './RecipeFormContainer.js';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Cookbook = (props) => {
	const { recipes, starRecipe, unstarRecipe } = props;
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
					/>
				)}
			</Col>
			</Row>
		</div>
	)
}

const mapStateToProps = state => {
	return ({
		recipes: state.recipes
	})
};

export default connect(mapStateToProps, { starRecipe, unstarRecipe })(Cookbook);