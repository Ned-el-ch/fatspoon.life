import React from 'react'
import PageHeader from '../Components/PageHeader.js';
import IngredientCard from '../Components/IngredientCard.js';
import AnimatedSelect from '../Components/AnimatedSelect.js';
import { connect } from 'react-redux'
import { removeIngredient, increaseIngredient, decreaseIngredient } from '../Actions/ingredients'

const Fridge = ({ingredients, removeIngredient, increaseIngredient, decreaseIngredient}) => {
	return (
		<div className="fridge-container">
			<PageHeader title="My Fridge"/>
			{/*
			CHECK IF THE USER HAS ANY INGREDIENTS IN THEIR FRIDGE, IF NOT RENDER
			"LOOKS LIKE YOU DON'T HAVE INGREDIENTS YET, WHAT WOULD YOU LIKE TO ADD?"
			*/}
			<AnimatedSelect />
			<div className="fridge-ingredients-container">
				<div className="fridge-ingredients-filter">

				</div>
				<div className="fridge-ingredients">
					{ingredients.map(ingredient => {
						return(
							<IngredientCard
								key={ingredient.id}
								ingredient={ingredient}
								removeIngredient={removeIngredient}
								increaseIngredient={increaseIngredient}
								decreaseIngredient={decreaseIngredient}
							/>
						)
					})}
				</div>
			</div>
		</div>
	)
}

const mapStateToProps = state => {
	return ({
		ingredients: state.ingredients
	})
};

export default connect(mapStateToProps, { removeIngredient, increaseIngredient, decreaseIngredient })(Fridge);
