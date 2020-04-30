import React from 'react';
import { connect } from 'react-redux';
import { starRecipe, unstarRecipe } from '../Actions/recipes';

import RecipeCard from '../Components/RecipeCard';
import PageHeader from '../Components/PageHeader';
import Row from 'react-bootstrap/Row';
import RecipeForm from '../Components/RecipeForm';

const Cookbook = (props) => {
	const { recipes, starRecipe, unstarRecipe } = props;
	return (
		<div className="cookbook-container">
			<PageHeader title="My Cookbook"/>
			<RecipeForm/>
			<Row className="align-self-start justify-content-center">
				{recipes.map(recipe => 
					<RecipeCard
						key={recipe.id}
						recipe={recipe}
						starRecipe={starRecipe}
						unstarRecipe={unstarRecipe}
					/>
				)}
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