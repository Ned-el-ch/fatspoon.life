import React from 'react'
import PageHeader from '../components/PageHeader'
import IngredientCard from '../components/IngredientCard'
import AnimatedSelect from '../components/AnimatedSelect'
import { connect } from 'react-redux'
import { removeIngredient, increaseIngredient, decreaseIngredient } from '../actions/ingredients'

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
	)
}

const mapStateToProps = state => {
	return ({
		ingredients: state.ingredients
	})
};

const mapDispatchToProps = () => {
	return { removeIngredient, increaseIngredient, decreaseIngredient }
}

export default connect(mapStateToProps, mapDispatchToProps)(Fridge);