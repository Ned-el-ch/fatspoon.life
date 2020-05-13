import React from 'react';
import { connect } from 'react-redux';
import { starRecipe, unstarRecipe } from '../Actions/recipes';
import { generateLink, createLabels } from '../Concerns/generateExtra'
import RecipeCard from '../Components/RecipeCard.js';
import PageHeader from '../Components/PageHeader.js';
import RecipeFormContainer from './RecipeFormContainer.js';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Cookbook = (props) => {
	const { recipes, ingredients, starRecipe, unstarRecipe } = props;
	return (
		<div className="content cookbook-container">
			<PageHeader title="My Cookbook"/>
			<div className="content--inner">
			<RecipeFormContainer />
			<Row>
			<Col xs={12} sm={12} md={{ span: 10, offset: 1}} lg={{ span: 10, offset: 1}} className="rf-remove-margin">
				{recipes.length > 0 ?
					recipes.map(recipe => 
					<RecipeCard
						key={recipe.uuid}
						recipe={recipe}
						starRecipe={starRecipe}
						unstarRecipe={unstarRecipe}
						labels={createLabels(recipe, ingredients)}
						link={generateLink(recipe)}
					/>
				)
				:
				<div className="mp-subheading-container"><span className="mp-subheading">You don't have any recipes yet! Add some with the button above!</span></div>
			}
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